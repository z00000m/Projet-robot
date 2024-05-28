#include <Wire.h>
#include <SoftwareSerial.h>

// Broches de contrôle du moteur sur la carte Romeo v1
#define ENA 5
#define IN1 4
#define IN2 7

// Définir les broches pour le capteur de gaz MQ2
#define MQ2_PIN A0

// Adresse I2C des capteurs
#define SRF08_ADDRESS 0x70 // Par défaut, peut varier
#define TPA81_ADDRESS 0x68 // Adresse par défaut du TPA81

// Définir les broches pour le Bluetooth
#define BT_RX 0
#define BT_TX 1

SoftwareSerial BTSerial(BT_RX, BT_TX); // RX, TX

void setup() {
  // Initialiser la communication série pour le Bluetooth et le débogage
  Serial.begin(9600);
  BTSerial.begin(9600);

  // Initialiser I2C
  Wire.begin();

  // Configurer les broches comme sorties
  pinMode(ENA, OUTPUT);
  pinMode(IN1, OUTPUT);
  pinMode(IN2, OUTPUT);

  // Configurer la broche du MQ2 comme entrée
  pinMode(MQ2_PIN, INPUT);
}

void loop() {
  // Lire la distance du SRF08
  int distance = readSRF08();

  // Lire la température du TPA81
  int temperature = readTPA81();

  // Lire la valeur du capteur de gaz MQ2
  int gasValue = analogRead(MQ2_PIN);

  // Envoyer les données via Bluetooth
  BTSerial.print("Distance: ");
  BTSerial.print(distance);
  BTSerial.print(" cm, Température: ");
  BTSerial.print(temperature);
  BTSerial.print(" °C, Gaz: ");
  BTSerial.println(gasValue);

  // Déplacer le moteur en fonction de la distance mesurée
  if (distance < 20) {
    // Avancer le moteur
    digitalWrite(IN1, HIGH);
    digitalWrite(IN2, LOW);
    analogWrite(ENA, 255);
  } else {
    // Arrêter le moteur
    digitalWrite(IN1, LOW);
    digitalWrite(IN2, LOW);
    analogWrite(ENA, 0);
  }

  // Attendre un moment avant de reprendre la boucle
  delay(1000);
}

int readSRF08() {
  // Commencer le processus de mesure
  Wire.beginTransmission(SRF08_ADDRESS);
  Wire.write(0x00); // Commande pour démarrer la mesure
  Wire.write(0x51); // Mesure en cm
  Wire.endTransmission();

  delay(70); // Attendre la fin de la mesure

  // Lire la mesure
  Wire.beginTransmission(SRF08_ADDRESS);
  Wire.write(0x02); // Registre de la mesure de distance
  Wire.endTransmission();

  Wire.requestFrom(SRF08_ADDRESS, 2);
  int distance = 0;
  if (Wire.available() == 2) {
    distance = Wire.read() << 8 | Wire.read();
  }
  return distance;
}

int readTPA81() {
  Wire.beginTransmission(TPA81_ADDRESS);
  Wire.write(0x01); // Registre de la température ambiante
  Wire.endTransmission();

  Wire.requestFrom(TPA81_ADDRESS, 1);
  int temperature = 0;
  if (Wire.available() == 1) {
    temperature = Wire.read();
  }
  return temperature;
}
void setup() {
  // put your setup code here, to run once:

}

void loop() {
  // put your main code here, to run repeatedly:

}

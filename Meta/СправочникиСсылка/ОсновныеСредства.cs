
using System;
using System.IO;
using System.Globalization;
using System.Runtime.Serialization;
using ProtoBuf;/*https://github.com/ServiceStack/ServiceStack/tree/master/lib*/
using ServiceStack.Text;/*https://github.com/ServiceStack/ServiceStack.Text*/
using V82;
using V82.ОбщиеОбъекты;
using V82.СправочникиСсылка;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.СправочникиСсылка
{
	///<summary>
	///(Общ)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class ОсновныеСредства:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("445ce11c-52df-46ef-945d-46be54138d89");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191633.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
		public static readonly long КонтрольнаяСуммаКласса = 123;
		[DataMember]
		[ProtoMember(1)]
		public Guid Ссылка {get;set;}
		[DataMember]
		[ProtoMember(2)]
		public long Версия {get;set;}
		/*static хэш сумма состава и порядка реквизитов*/
		/*версия класса восстановленного из пакета*/
		[DataMember]
		[ProtoMember(3)]
		public bool ПометкаУдаления {get;set;}
		[DataMember]
		[ProtoMember(4)]
		public bool Предопределенный {get;set;}
		[DataMember]
		[ProtoMember(5)]
		public bool ЭтоГруппа {get;set;}
		[DataMember]
		[ProtoMember(6)]
		public Guid Родитель {get;set;}
		[DataMember]
		[ProtoMember(7)]
		public string/*9*/ Код {get;set;}
		[DataMember]
		[ProtoMember(8)]
		public string/*100*/ Наименование {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(9)]
		public bool Автотранспорт {get;set;}//Признак автотранспорта
		///<summary>
		///Адрес местонахождения объекта недвижимости
		///</summary>
		[DataMember]
		[ProtoMember(10)]
		public string/*(0)*/ АдресМестонахождения {get;set;}//Адрес местонахождения
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(11)]
		public V82.Перечисления/*Ссылка*/.АмортизационныеГруппы АмортизационнаяГруппа {get;set;}//Амортизационная группа
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(12)]
		public V82.Перечисления/*Ссылка*/.ГруппыОС ГруппаОС {get;set;}//Группа ОС
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(13)]
		public DateTime ДатаВыпуска {get;set;}//Дата выпуска (постройки)
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(14)]
		public string/*(0)*/ ЗаводскойНомер {get;set;}//Заводской номер
		///<summary>
		///(Общ) Организация-изготовитель
		///</summary>
		[DataMember]
		[ProtoMember(15)]
		public string/*(0)*/ Изготовитель {get;set;}
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(16)]
		public V82.СправочникиСсылка.ОбщероссийскийКлассификаторОсновныхФондов КодПоОКОФ {get;set;}//Код по ОКОФ
		///<summary>
		///Код региона объекта недвижимости
		///</summary>
		[DataMember]
		[ProtoMember(17)]
		public string/*(2)*/ КодРегиона {get;set;}//Код региона
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(18)]
		public string/*(0)*/ Комментарий {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(19)]
		public string/*(0)*/ НаименованиеПолное {get;set;}//Полное наименование
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(20)]
		public string/*(0)*/ НомерПаспорта {get;set;}//Номер паспорта (регистрационный)
		[DataMember]
		[ProtoMember(21)]
		public bool Помещение {get;set;}//Является помещением или составной частью здания (сооружения)
		[DataMember]
		[ProtoMember(22)]
		public string/*(100)*/ КадастровыйНомер {get;set;}//Кадастровый номер
		[DataMember]
		[ProtoMember(23)]
		public string/*(21)*/ УсловныйНомер {get;set;}//Условный номер
		[DataMember]
		[ProtoMember(24)]
		public V82.Перечисления/*Ссылка*/.НазначенияПомещения НазначениеПомещения {get;set;}//Назначение помещения

		public V82.СправочникиОбъект.ОсновныеСредства  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.ОсновныеСредства();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.ЭтоГруппа = ЭтоГруппа;
			Объект.Родитель = Родитель;
			Объект.Код = Код;
			Объект.Наименование = Наименование;
			Объект.Автотранспорт = Автотранспорт;
			Объект.АдресМестонахождения = АдресМестонахождения;
			Объект.АмортизационнаяГруппа = АмортизационнаяГруппа;
			Объект.ГруппаОС = ГруппаОС;
			Объект.ДатаВыпуска = ДатаВыпуска;
			Объект.ЗаводскойНомер = ЗаводскойНомер;
			Объект.Изготовитель = Изготовитель;
			Объект.КодПоОКОФ = КодПоОКОФ;
			Объект.КодРегиона = КодРегиона;
			Объект.Комментарий = Комментарий;
			Объект.НаименованиеПолное = НаименованиеПолное;
			Объект.НомерПаспорта = НомерПаспорта;
			Объект.Помещение = Помещение;
			Объект.КадастровыйНомер = КадастровыйНомер;
			Объект.УсловныйНомер = УсловныйНомер;
			Объект.НазначениеПомещения = НазначениеПомещения;
			return Объект;
		}

		public void СериализацияProtoBuf(Stream Поток)
		{
			Serializer.Serialize(Поток,this);
		}

		public string СериализацияJson()
		{
			return this.ToJson();
		}

		public string СериализацияXml()
		{
			return this.ToXml();
		}
	}
}
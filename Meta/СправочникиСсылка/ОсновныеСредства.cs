
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
		public string ВерсияДанных {get;set;}
		/*static хэш сумма состава и порядка реквизитов*/
		/*версия класса восстановленного из пакета*/
		public bool ПометкаУдаления {get;set;}
		public bool Предопределенный {get;set;}
		public Guid Родитель {get;set;}
		public bool ЭтоГруппа {get;set;}
		public string/*9*/ Код {get;set;}
		public string/*100*/ Наименование {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		public bool Автотранспорт {get;set;}//Признак автотранспорта
		///<summary>
		///Адрес местонахождения объекта недвижимости
		///</summary>
		public string/*(0)*/ АдресМестонахождения {get;set;}//Адрес местонахождения
		///<summary>
		///(Регл)
		///</summary>
		public V82.Перечисления/*Ссылка*/.АмортизационныеГруппы АмортизационнаяГруппа {get;set;}//Амортизационная группа
		///<summary>
		///(Регл)
		///</summary>
		public V82.Перечисления/*Ссылка*/.ГруппыОС ГруппаОС {get;set;}//Группа ОС
		///<summary>
		///(Общ)
		///</summary>
		public DateTime ДатаВыпуска {get;set;}//Дата выпуска (постройки)
		///<summary>
		///(Общ)
		///</summary>
		public string/*(0)*/ ЗаводскойНомер {get;set;}//Заводской номер
		///<summary>
		///(Общ) Организация-изготовитель
		///</summary>
		public string/*(0)*/ Изготовитель {get;set;}
		///<summary>
		///(Регл)
		///</summary>
		public V82.СправочникиСсылка.ОбщероссийскийКлассификаторОсновныхФондов КодПоОКОФ {get;set;}//Код по ОКОФ
		///<summary>
		///Код региона объекта недвижимости
		///</summary>
		public string/*(2)*/ КодРегиона {get;set;}//Код региона
		///<summary>
		///(Общ)
		///</summary>
		public string/*(0)*/ Комментарий {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		public string/*(0)*/ НаименованиеПолное {get;set;}//Полное наименование
		///<summary>
		///(Общ)
		///</summary>
		public string/*(0)*/ НомерПаспорта {get;set;}//Номер паспорта (регистрационный)
		public bool Помещение {get;set;}//Является помещением или составной частью здания (сооружения)
		public string/*(100)*/ КадастровыйНомер {get;set;}//Кадастровый номер
		public string/*(21)*/ УсловныйНомер {get;set;}//Условный номер
		public V82.Перечисления/*Ссылка*/.НазначенияПомещения НазначениеПомещения {get;set;}//Назначение помещения

		public V82.СправочникиОбъект.ОсновныеСредства  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.ОсновныеСредства();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Родитель = Родитель;
			Объект.ЭтоГруппа = ЭтоГруппа;
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
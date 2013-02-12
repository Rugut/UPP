
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
	[ProtoContract]
	[DataContract]
	public partial class МедицинскиеСтраховыеПолисы:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("be04091e-2e71-4a2a-9dc2-912b8acc2caa");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191911.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public string/*9*/ Код {get;set;}
		[DataMember]
		[ProtoMember(6)]
		public string/*25*/ Наименование {get;set;}
		[DataMember]
		[ProtoMember(7)]
		public V82.СправочникиСсылка.ФизическиеЛица Физлицо {get;set;}
		[DataMember]
		[ProtoMember(8)]
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		[DataMember]
		[ProtoMember(9)]
		public V82.Перечисления/*Ссылка*/.ВидыМедицинскогоСтрахования ВидСтрахования {get;set;}//Вид страхования
		[DataMember]
		[ProtoMember(10)]
		public DateTime ДатаВыдачиПолиса {get;set;}//Дата выдачи полиса
		[DataMember]
		[ProtoMember(11)]
		public DateTime ДатаОкончанияПолиса {get;set;}//Дата окончания полиса
		[DataMember]
		[ProtoMember(12)]
		public V82.СправочникиСсылка.ПрограммыМедицинскогоСтрахования ПрограммаСтрахования {get;set;}//Программа страхования
		[DataMember]
		[ProtoMember(13)]
		public bool СтрахованиеРодственника {get;set;}//Страхование родственника
		[DataMember]
		[ProtoMember(14)]
		public string/*(50)*/ Родственник {get;set;}
		[DataMember]
		[ProtoMember(15)]
		public V82.Перечисления/*Ссылка*/.ПолФизическихЛиц Пол {get;set;}
		[DataMember]
		[ProtoMember(16)]
		public DateTime ДатаРождения {get;set;}//Дата рождения
		[DataMember]
		[ProtoMember(17)]
		public string/*(300)*/ УдостоверениеЛичности {get;set;}//Удостоверение личности
		[DataMember]
		[ProtoMember(18)]
		public string/*(100)*/ АдресФактический {get;set;}//Адрес фактический
		[DataMember]
		[ProtoMember(19)]
		public string/*(100)*/ ТелефонДомашний {get;set;}//Телефон домашний
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(20)]
		public V82.СправочникиСсылка.ДокументыУдостоверяющиеЛичность ДокументВид {get;set;}//Вид документа
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(21)]
		public string/*(14)*/ ДокументСерия {get;set;}//Серия документа
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(22)]
		public string/*(14)*/ ДокументНомер {get;set;}//Номер документа
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(23)]
		public DateTime ДокументДатаВыдачи {get;set;}//Дата выдачи документа
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(24)]
		public string/*(0)*/ ДокументКемВыдан {get;set;}//Кем выдан документ
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(25)]
		public string/*(15)*/ ДокументКодПодразделения {get;set;}//Код подразделения в документе
		[DataMember]
		[ProtoMember(26)]
		public string/*(0)*/ Комментарий {get;set;}

		public V82.СправочникиОбъект.МедицинскиеСтраховыеПолисы  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.МедицинскиеСтраховыеПолисы();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Код = Код;
			Объект.Наименование = Наименование;
			Объект.Физлицо = Физлицо;
			Объект.Организация = Организация;
			Объект.ВидСтрахования = ВидСтрахования;
			Объект.ДатаВыдачиПолиса = ДатаВыдачиПолиса;
			Объект.ДатаОкончанияПолиса = ДатаОкончанияПолиса;
			Объект.ПрограммаСтрахования = ПрограммаСтрахования;
			Объект.СтрахованиеРодственника = СтрахованиеРодственника;
			Объект.Родственник = Родственник;
			Объект.Пол = Пол;
			Объект.ДатаРождения = ДатаРождения;
			Объект.УдостоверениеЛичности = УдостоверениеЛичности;
			Объект.АдресФактический = АдресФактический;
			Объект.ТелефонДомашний = ТелефонДомашний;
			Объект.ДокументВид = ДокументВид;
			Объект.ДокументСерия = ДокументСерия;
			Объект.ДокументНомер = ДокументНомер;
			Объект.ДокументДатаВыдачи = ДокументДатаВыдачи;
			Объект.ДокументКемВыдан = ДокументКемВыдан;
			Объект.ДокументКодПодразделения = ДокументКодПодразделения;
			Объект.Комментарий = Комментарий;
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
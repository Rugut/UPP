
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
	///Доверенности налогоплательщика на представителя
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class ДоверенностиНалогоплательщика:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("1d7957f5-e538-463a-b3ef-913e8125349c");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191042.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public Guid Владелец {get;set;}
		[DataMember]
		[ProtoMember(6)]
		public string/*9*/ Код {get;set;}
		[DataMember]
		[ProtoMember(7)]
		public string/*100*/ Наименование {get;set;}
		[DataMember]
		[ProtoMember(8)]
		public string/*(50)*/ НомерДовер {get;set;}//Номер доверенности
		///<summary>
		///Дата выдачи доверенности
		///</summary>
		[DataMember]
		[ProtoMember(9)]
		public DateTime ДатаВыдачи {get;set;}//Дата выдачи
		///<summary>
		///Дата окончания действия доверенности
		///</summary>
		[DataMember]
		[ProtoMember(10)]
		public DateTime ДатаОкончания {get;set;}//Дата окончания
		[DataMember]
		[ProtoMember(11)]
		public decimal/*(1)*/ ПризнакДоверителя {get;set;}//Признак доверителя
		[DataMember]
		[ProtoMember(12)]
		public string/*(1000)*/ ДоверительЮЛ_НаимОрг {get;set;}//Наименование организации
		[DataMember]
		[ProtoMember(13)]
		public string/*(10)*/ ДоверительЮЛ_ИНН {get;set;}//ИНН
		[DataMember]
		[ProtoMember(14)]
		public string/*(9)*/ ДоверительЮЛ_КПП {get;set;}//КПП
		[DataMember]
		[ProtoMember(15)]
		public string/*(13)*/ ДоверительЮЛ_ОГРН {get;set;}//ОГРН
		///<summary>
		///ИНН руководителя доверителя
		///</summary>
		[DataMember]
		[ProtoMember(16)]
		public string/*(12)*/ ДоверительРук_ИНН {get;set;}//ИНН руководителя доверителя
		[DataMember]
		[ProtoMember(17)]
		public string/*(12)*/ ДоверительФЛ_ИНН {get;set;}//ИНН
		[DataMember]
		[ProtoMember(18)]
		public string/*(15)*/ ДоверительФЛ_ОГРН {get;set;}//ОГРН
		[DataMember]
		[ProtoMember(19)]
		public V82.СправочникиСсылка.КлассификаторСтранМира ДоверительФЛ_Гражданство {get;set;}//Гражданство
		[DataMember]
		[ProtoMember(20)]
		public DateTime ДоверительФЛ_ДатаРождения {get;set;}//ДатаРождения
		[DataMember]
		[ProtoMember(21)]
		public string/*(1000)*/ ПредставительЮЛ_НаимОрг {get;set;}//Наименование организации
		[DataMember]
		[ProtoMember(22)]
		public string/*(10)*/ ПредставительЮЛ_ИНН {get;set;}//ИНН
		[DataMember]
		[ProtoMember(23)]
		public string/*(9)*/ ПредставительЮЛ_КПП {get;set;}//КПП
		[DataMember]
		[ProtoMember(24)]
		public string/*(13)*/ ПредставительЮЛ_ОГРН {get;set;}//ОГРН
		[DataMember]
		[ProtoMember(25)]
		public string/*(12)*/ ПредставительФЛ_ИНН {get;set;}//ИНН
		[DataMember]
		[ProtoMember(26)]
		public string/*(15)*/ ПредставительФЛ_ОГРН {get;set;}//ОГРН
		[DataMember]
		[ProtoMember(27)]
		public V82.СправочникиСсылка.КлассификаторСтранМира ПредставительФЛ_Гражданство {get;set;}//Гражданство
		[DataMember]
		[ProtoMember(28)]
		public DateTime ПредставительФЛ_ДатаРождения {get;set;}//ДатаРождения
		[DataMember]
		[ProtoMember(29)]
		public string/*(1000)*/ НотариусЮЛ_НаимОрг {get;set;}//Наименование организации
		[DataMember]
		[ProtoMember(30)]
		public string/*(10)*/ НотариусЮЛ_ИНН {get;set;}//ИНН
		[DataMember]
		[ProtoMember(31)]
		public string/*(9)*/ НотариусЮЛ_КПП {get;set;}//КПП
		[DataMember]
		[ProtoMember(32)]
		public string/*(13)*/ НотариусЮЛ_ОГРН {get;set;}//ОГРН
		[DataMember]
		[ProtoMember(33)]
		public string/*(12)*/ НотариусФЛ_ИНН {get;set;}//ИНН
		[DataMember]
		[ProtoMember(34)]
		public bool ДоверительЯвляетсяЮЛ {get;set;}//Доверитель является ЮЛ
		[DataMember]
		[ProtoMember(35)]
		public bool ПредставительЯвляетсяЮЛ {get;set;}//Представитель является ЮЛ
		[DataMember]
		[ProtoMember(36)]
		public bool НотариусЯвляетсяЮЛ {get;set;}//Нотариус является ЮЛ
		[DataMember]
		[ProtoMember(37)]
		public bool ЗаверенаНотариально {get;set;}//Заверена нотариально
		///<summary>
		///наличие уполномоченного лица у доверителя - юл
		///</summary>
		[DataMember]
		[ProtoMember(38)]
		public bool ДоверительИмеетУЛ {get;set;}//Доверитель имеет УЛ
		[DataMember]
		[ProtoMember(39)]
		public bool ПредставительЯвляетсяСотрудником {get;set;}//Представитель является сотрудником

		public V82.СправочникиОбъект.ДоверенностиНалогоплательщика  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.ДоверенностиНалогоплательщика();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Владелец = Владелец;
			Объект.Код = Код;
			Объект.Наименование = Наименование;
			Объект.НомерДовер = НомерДовер;
			Объект.ДатаВыдачи = ДатаВыдачи;
			Объект.ДатаОкончания = ДатаОкончания;
			Объект.ПризнакДоверителя = ПризнакДоверителя;
			Объект.ДоверительЮЛ_НаимОрг = ДоверительЮЛ_НаимОрг;
			Объект.ДоверительЮЛ_ИНН = ДоверительЮЛ_ИНН;
			Объект.ДоверительЮЛ_КПП = ДоверительЮЛ_КПП;
			Объект.ДоверительЮЛ_ОГРН = ДоверительЮЛ_ОГРН;
			Объект.ДоверительРук_ИНН = ДоверительРук_ИНН;
			Объект.ДоверительФЛ_ИНН = ДоверительФЛ_ИНН;
			Объект.ДоверительФЛ_ОГРН = ДоверительФЛ_ОГРН;
			Объект.ДоверительФЛ_Гражданство = ДоверительФЛ_Гражданство;
			Объект.ДоверительФЛ_ДатаРождения = ДоверительФЛ_ДатаРождения;
			Объект.ПредставительЮЛ_НаимОрг = ПредставительЮЛ_НаимОрг;
			Объект.ПредставительЮЛ_ИНН = ПредставительЮЛ_ИНН;
			Объект.ПредставительЮЛ_КПП = ПредставительЮЛ_КПП;
			Объект.ПредставительЮЛ_ОГРН = ПредставительЮЛ_ОГРН;
			Объект.ПредставительФЛ_ИНН = ПредставительФЛ_ИНН;
			Объект.ПредставительФЛ_ОГРН = ПредставительФЛ_ОГРН;
			Объект.ПредставительФЛ_Гражданство = ПредставительФЛ_Гражданство;
			Объект.ПредставительФЛ_ДатаРождения = ПредставительФЛ_ДатаРождения;
			Объект.НотариусЮЛ_НаимОрг = НотариусЮЛ_НаимОрг;
			Объект.НотариусЮЛ_ИНН = НотариусЮЛ_ИНН;
			Объект.НотариусЮЛ_КПП = НотариусЮЛ_КПП;
			Объект.НотариусЮЛ_ОГРН = НотариусЮЛ_ОГРН;
			Объект.НотариусФЛ_ИНН = НотариусФЛ_ИНН;
			Объект.ДоверительЯвляетсяЮЛ = ДоверительЯвляетсяЮЛ;
			Объект.ПредставительЯвляетсяЮЛ = ПредставительЯвляетсяЮЛ;
			Объект.НотариусЯвляетсяЮЛ = НотариусЯвляетсяЮЛ;
			Объект.ЗаверенаНотариально = ЗаверенаНотариально;
			Объект.ДоверительИмеетУЛ = ДоверительИмеетУЛ;
			Объект.ПредставительЯвляетсяСотрудником = ПредставительЯвляетсяСотрудником;
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
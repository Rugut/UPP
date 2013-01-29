
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
	public partial class БанковскиеСчета:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("9c660244-5259-4f3b-b8bf-e1ab83c0de32");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191838.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		///<summary>
		///(Общ) Номер расчетного счета
		///</summary>
		[DataMember]
		[ProtoMember(8)]
		public string/*(20)*/ НомерСчета {get;set;}//Номер счета
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(9)]
		public V82.СправочникиСсылка.Банки Банк {get;set;}
		///<summary>
		///(Регл) Банк, в случае непрямых расчетов
		///</summary>
		[DataMember]
		[ProtoMember(10)]
		public V82.СправочникиСсылка.Банки БанкДляРасчетов {get;set;}//Банк для расчетов
		///<summary>
		///(Регл) Текст "Плательщик\Получатель" в платежных документах
		///</summary>
		[DataMember]
		[ProtoMember(11)]
		public string/*(0)*/ ТекстКорреспондента {get;set;}//Текст корреспондента
		///<summary>
		///(Общ) Текст назначения платежа
		///</summary>
		[DataMember]
		[ProtoMember(12)]
		public string/*(0)*/ ТекстНазначения {get;set;}//Текст назначения
		///<summary>
		///(Общ) Расчетный, депозитный, ссудный, иной
		///</summary>
		[DataMember]
		[ProtoMember(13)]
		public string/*(15)*/ ВидСчета {get;set;}//Вид счета
		///<summary>
		///(Общ) Валюта, в которой хранятся денежные средства
		///</summary>
		[DataMember]
		[ProtoMember(14)]
		public V82.СправочникиСсылка.Валюты ВалютаДенежныхСредств {get;set;}//Валюта денежных средств
		///<summary>
		///(Регл) Номер и дата разрешения открытия счета
		///</summary>
		[DataMember]
		[ProtoMember(15)]
		public string/*(30)*/ НомерИДатаРазрешения {get;set;}//Номер и дата разрешения
		///<summary>
		///(Общ) Дата открытия счета
		///</summary>
		[DataMember]
		[ProtoMember(16)]
		public DateTime ДатаОткрытия {get;set;}//Дата открытия
		///<summary>
		///(Общ) Дата закрытия счета
		///</summary>
		[DataMember]
		[ProtoMember(17)]
		public DateTime ДатаЗакрытия {get;set;}//Дата закрытия
		///<summary>
		///(Общ) Указывать в дате документа месяц прописью
		///</summary>
		[DataMember]
		[ProtoMember(18)]
		public bool МесяцПрописью {get;set;}//Месяц прописью
		///<summary>
		///(Общ) Указывать сумму без копеек, если она в целых рублях
		///</summary>
		[DataMember]
		[ProtoMember(19)]
		public bool СуммаБезКопеек {get;set;}//Сумма без копеек

		public V82.СправочникиОбъект.БанковскиеСчета  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.БанковскиеСчета();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Владелец = Владелец;
			Объект.Код = Код;
			Объект.Наименование = Наименование;
			Объект.НомерСчета = НомерСчета;
			Объект.Банк = Банк;
			Объект.БанкДляРасчетов = БанкДляРасчетов;
			Объект.ТекстКорреспондента = ТекстКорреспондента;
			Объект.ТекстНазначения = ТекстНазначения;
			Объект.ВидСчета = ВидСчета;
			Объект.ВалютаДенежныхСредств = ВалютаДенежныхСредств;
			Объект.НомерИДатаРазрешения = НомерИДатаРазрешения;
			Объект.ДатаОткрытия = ДатаОткрытия;
			Объект.ДатаЗакрытия = ДатаЗакрытия;
			Объект.МесяцПрописью = МесяцПрописью;
			Объект.СуммаБезКопеек = СуммаБезКопеек;
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

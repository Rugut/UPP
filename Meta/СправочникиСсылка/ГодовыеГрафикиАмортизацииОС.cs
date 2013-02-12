
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
	public partial class ГодовыеГрафикиАмортизацииОС:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("01cfb766-298c-418c-809b-5e4319699d61");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191533.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public string/*50*/ Наименование {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(7)]
		public string/*(0)*/ Комментарий {get;set;}//Прочие сведения
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(8)]
		public decimal/*(6.3)*/ Коэффициент1 {get;set;}//Январь
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(9)]
		public decimal/*(6.3)*/ Коэффициент2 {get;set;}//Февраль
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(10)]
		public decimal/*(6.3)*/ Коэффициент3 {get;set;}//Март
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(11)]
		public decimal/*(6.3)*/ Коэффициент4 {get;set;}//Апрель
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(12)]
		public decimal/*(6.3)*/ Коэффициент5 {get;set;}//Май
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(13)]
		public decimal/*(6.3)*/ Коэффициент6 {get;set;}//Июнь
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(14)]
		public decimal/*(6.3)*/ Коэффициент7 {get;set;}//Июль
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(15)]
		public decimal/*(6.3)*/ Коэффициент8 {get;set;}//Август
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(16)]
		public decimal/*(6.3)*/ Коэффициент9 {get;set;}//Сентябрь
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(17)]
		public decimal/*(6.3)*/ Коэффициент10 {get;set;}//Октябрь
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(18)]
		public decimal/*(6.3)*/ Коэффициент11 {get;set;}//Ноябрь
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(19)]
		public decimal/*(6.3)*/ Коэффициент12 {get;set;}//Декабрь

		public V82.СправочникиОбъект.ГодовыеГрафикиАмортизацииОС  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.ГодовыеГрафикиАмортизацииОС();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Код = Код;
			Объект.Наименование = Наименование;
			Объект.Комментарий = Комментарий;
			Объект.Коэффициент1 = Коэффициент1;
			Объект.Коэффициент2 = Коэффициент2;
			Объект.Коэффициент3 = Коэффициент3;
			Объект.Коэффициент4 = Коэффициент4;
			Объект.Коэффициент5 = Коэффициент5;
			Объект.Коэффициент6 = Коэффициент6;
			Объект.Коэффициент7 = Коэффициент7;
			Объект.Коэффициент8 = Коэффициент8;
			Объект.Коэффициент9 = Коэффициент9;
			Объект.Коэффициент10 = Коэффициент10;
			Объект.Коэффициент11 = Коэффициент11;
			Объект.Коэффициент12 = Коэффициент12;
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
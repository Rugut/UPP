
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
	///(Регл)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class ДоходыЕСН:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("084ef5bc-7c3d-4a5f-a823-64dd6ae447bb");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191718.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public string/*150*/ Наименование {get;set;}
		[DataMember]
		[ProtoMember(6)]
		public bool ВходитВБазуФОМС {get;set;}//Входит в базу ФОМС
		[DataMember]
		[ProtoMember(7)]
		public bool ВходитВБазуФСС {get;set;}//Входит в базу ФСС
		[DataMember]
		[ProtoMember(8)]
		public bool ВходитВБазуФедеральныйБюджет {get;set;}//Входит в базу федеральный бюджет

		public V82.СправочникиОбъект.ДоходыЕСН  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.ДоходыЕСН();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Наименование = Наименование;
			Объект.ВходитВБазуФОМС = ВходитВБазуФОМС;
			Объект.ВходитВБазуФСС = ВходитВБазуФСС;
			Объект.ВходитВБазуФедеральныйБюджет = ВходитВБазуФедеральныйБюджет;
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

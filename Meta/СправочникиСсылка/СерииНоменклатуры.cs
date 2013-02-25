
using System;
using System.IO;
using System.Data.SqlClient;
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
	public partial class СерииНоменклатуры:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("0675623a-8763-43c0-94dc-e6f81b5173ab");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191917.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public Guid Владелец {get;set;}
		public string/*9*/ Код {get;set;}
		[DataMember(Name = "Представление")]//Проверить основное представление.
		[ProtoMember(3)]
		public string/*100*/ Наименование {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		public string/*(25)*/ СерийныйНомер {get;set;}//Серийный номер
		///<summary>
		///(Общ)
		///</summary>
		public DateTime СрокГодности {get;set;}//Срок годности
		///<summary>
		///(Регл) Номер ГТД по умолчанию
		///</summary>
		public V82.СправочникиСсылка.НомераГТД НомерГТД {get;set;}//Номер ГТД
		///<summary>
		///(Регл)
		///</summary>
		public V82.СправочникиСсылка.КлассификаторСтранМира СтранаПроисхождения {get;set;}//Страна происхождения
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.ХранилищеДополнительнойИнформации ОсновноеИзображение {get;set;}//Основное изображение
		///<summary>
		///(Общ) Любая дополнительная информация
		///</summary>
		public string/*(0)*/ Комментарий {get;set;}
		
		public СерииНоменклатуры()
		{
		}
		
		public СерииНоменклатуры(byte[] УникальныйИдентификатор)
		{
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					Команда.CommandText = @"Select top 1 
					_IDRRef [Ссылка]
					,_Version [Версия]
					,_Marked [ПометкаУдаления]
					,_IsMetadata [Предопределенный]
					,_Code [Код]
					,_Description [Наименование]
					,_Fld3401 [СерийныйНомер]
					,_Fld3402 [СрокГодности]
					,_Fld3403RRef [НомерГТД]
					,_Fld3404RRef [СтранаПроисхождения]
					,_Fld3405RRef [ОсновноеИзображение]
					,_Fld3406 [Комментарий]
					From _Reference226(NOLOCK)
					Where _IDRRef=@УникальныйИдентификатор";
					Команда.Parameters.AddWithValue("УникальныйИдентификатор", УникальныйИдентификатор);
					using (var Читалка = Команда.ExecuteReader())
					{
						if (Читалка.Read())
						{
							//ToDo: Читать нужно через GetValues()
							Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Предопределенный = ((byte[])Читалка.GetValue(3))[0]==1;
							Код = Читалка.GetString(4);
							Наименование = Читалка.GetString(5);
							СерийныйНомер = Читалка.GetString(6);
							СрокГодности = Читалка.GetDateTime(7);
							НомерГТД = new V82.СправочникиСсылка.НомераГТД((byte[])Читалка.GetValue(8));
							СтранаПроисхождения = new V82.СправочникиСсылка.КлассификаторСтранМира((byte[])Читалка.GetValue(9));
							ОсновноеИзображение = new V82.СправочникиСсылка.ХранилищеДополнительнойИнформации((byte[])Читалка.GetValue(10));
							Комментарий = Читалка.GetString(11);
							//return Ссылка;
						}
						else
						{
							//return null;
						}
					}
				}
			}
		}
		
		public V82.СправочникиОбъект.СерииНоменклатуры  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.СерииНоменклатуры();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Владелец = Владелец;
			Объект.Код = Код;
			Объект.Наименование = Наименование;
			Объект.СерийныйНомер = СерийныйНомер;
			Объект.СрокГодности = СрокГодности;
			Объект.НомерГТД = НомерГТД;
			Объект.СтранаПроисхождения = СтранаПроисхождения;
			Объект.ОсновноеИзображение = ОсновноеИзображение;
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
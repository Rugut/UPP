
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
	public partial class НазначенияИспользования:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("94ff4f23-5de0-48bc-a1d1-a8de257e2e52");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191643.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public string/*50*/ Наименование {get;set;}
		public V82.Перечисления/*Ссылка*/.СпособыПогашенияСтоимости СпособПогашенияСтоимости {get;set;}//Способ погашения стоимости
		public decimal/*(4)*/ СрокПолезногоИспользования {get;set;}//Срок полезного использования
		public decimal/*(15.3)*/ Количество {get;set;}
		public V82.СправочникиСсылка.ЕдиницыИзмерения ЕдиницаИзмерения {get;set;}//Единица измерения
		public V82.СправочникиСсылка.СпособыОтраженияРасходовПоАмортизации СпособОтраженияРасходов {get;set;}//Способ отражения расходов
		
		public НазначенияИспользования()
		{
		}
		
		public НазначенияИспользования(byte[] УникальныйИдентификатор)
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
					,_Fld2567RRef [СпособПогашенияСтоимости]
					,_Fld2568 [СрокПолезногоИспользования]
					,_Fld2569 [Количество]
					,_Fld2570RRef [ЕдиницаИзмерения]
					,_Fld2571RRef [СпособОтраженияРасходов]
					From _Reference141(NOLOCK)
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
							СпособПогашенияСтоимости = V82.Перечисления/*Ссылка*/.СпособыПогашенияСтоимости.ПустаяСсылка.Получить((byte[])Читалка.GetValue(6));
							СрокПолезногоИспользования = Читалка.GetDecimal(7);
							Количество = Читалка.GetDecimal(8);
							ЕдиницаИзмерения = new V82.СправочникиСсылка.ЕдиницыИзмерения((byte[])Читалка.GetValue(9));
							СпособОтраженияРасходов = new V82.СправочникиСсылка.СпособыОтраженияРасходовПоАмортизации((byte[])Читалка.GetValue(10));
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
		
		public V82.СправочникиОбъект.НазначенияИспользования  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.НазначенияИспользования();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Владелец = Владелец;
			Объект.Код = Код;
			Объект.Наименование = Наименование;
			Объект.СпособПогашенияСтоимости = СпособПогашенияСтоимости;
			Объект.СрокПолезногоИспользования = СрокПолезногоИспользования;
			Объект.Количество = Количество;
			Объект.ЕдиницаИзмерения = ЕдиницаИзмерения;
			Объект.СпособОтраженияРасходов = СпособОтраженияРасходов;
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
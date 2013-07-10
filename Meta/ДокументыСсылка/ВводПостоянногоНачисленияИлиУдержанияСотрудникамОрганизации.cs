
using System;
using System.Collections;
using System.IO;
using System.Data.SqlClient;
using System.Globalization;
using System.Runtime.Serialization;
using ProtoBuf;/*https://github.com/ServiceStack/ServiceStack/tree/master/lib*/
using ServiceStack.Text;/*https://github.com/ServiceStack/ServiceStack.Text*/
using V82;
using V82.ОбщиеОбъекты;
using V82.ДокументыСсылка;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.ДокументыСсылка
{
	[ProtoContract]
	[DataContract]
	public partial class ВводПостоянногоНачисленияИлиУдержанияСотрудникамОрганизации:ДокументСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("92c362d5-3d36-4497-8bd6-a18b6d8723ca");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20120928012007.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public DateTime Дата {get;set;}
		public DateTime ПрефиксНомера {get;set;}
		public string/*11*/ Номер {get;set;}
		public bool Проведен {get;set;}
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		///<summary>
		///Любая дополнительная информация
		///</summary>
		public string/*(0)*/ Комментарий {get;set;}
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		public string/*(100)*/ КраткийСоставДокумента {get;set;}//Краткий состав документа
		public object ВидРасчета {get;set;}//Вид расчета
		public decimal/*(1)*/ Действие {get;set;}
		public DateTime ДатаДействия {get;set;}//Дата действия
		public DateTime ДатаДействияКонец {get;set;}//Дата действия конец
		
		public ВводПостоянногоНачисленияИлиУдержанияСотрудникамОрганизации()
		{
		}
		
		public ВводПостоянногоНачисленияИлиУдержанияСотрудникамОрганизации(byte[] УникальныйИдентификатор)
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
					,_Number [Номер]
					,_Fld24037RRef [Организация]
					,_Fld24038 [Комментарий]
					,_Fld24039RRef [Ответственный]
					,_Fld24040 [КраткийСоставДокумента]
					,_Fld24041_TYPE [ВидРасчета_Тип],_Fld24041_RRRef [ВидРасчета],_Fld24041_RTRef [ВидРасчета_Вид]
					,_Fld24042 [Действие]
					,_Fld24043 [ДатаДействия]
					,_Fld24044 [ДатаДействияКонец]
					From _Document23140(NOLOCK)
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
							Номер = Читалка.GetString(3);
							Комментарий = Читалка.GetString(5);
							КраткийСоставДокумента = Читалка.GetString(7);
							Действие = Читалка.GetDecimal(11);
							ДатаДействия = Читалка.GetDateTime(12);
							ДатаДействияКонец = Читалка.GetDateTime(13);
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
		
		public V82.ДокументыОбъект.ВводПостоянногоНачисленияИлиУдержанияСотрудникамОрганизации  ПолучитьОбъект()
		{
			var Объект = new V82.ДокументыОбъект.ВводПостоянногоНачисленияИлиУдержанияСотрудникамОрганизации();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Номер = Номер;
			Объект.Организация = Организация;
			Объект.Комментарий = Комментарий;
			Объект.Ответственный = Ответственный;
			Объект.КраткийСоставДокумента = КраткийСоставДокумента;
			Объект.ВидРасчета = ВидРасчета;
			Объект.Действие = Действие;
			Объект.ДатаДействия = ДатаДействия;
			Объект.ДатаДействияКонец = ДатаДействияКонец;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.ДокументыСсылка.ВводПостоянногоНачисленияИлиУдержанияСотрудникамОрганизации ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.ДокументыСсылка.ВводПостоянногоНачисленияИлиУдержанияСотрудникамОрганизации)Кэш[УИ];
			}
			var Ссылка = new V82.ДокументыСсылка.ВводПостоянногоНачисленияИлиУдержанияСотрудникамОрганизации(УникальныйИдентификатор);
			Кэш.Add(УИ, Ссылка);
			return Ссылка;
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
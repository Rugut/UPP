
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
	public partial class ВводПостоянногоНачисленияИлиУдержания:ДокументСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("5fa44653-2e03-4d73-a7f7-fed7d1086be8");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20120928011948.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		///<summary>
		///Любая дополнительная информация
		///</summary>
		public string/*(0)*/ Комментарий {get;set;}
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		public string/*(100)*/ КраткийСоставДокумента {get;set;}//Краткий состав документа
		public object ВидРасчета {get;set;}//Вид расчета
		public DateTime ДатаДействия {get;set;}//Дата действия
		public DateTime ДатаДействияКонец {get;set;}//Дата действия конец
		public V82.СправочникиСсылка.Подразделения Подразделение {get;set;}
		public decimal/*(1)*/ Действие {get;set;}
		
		public ВводПостоянногоНачисленияИлиУдержания()
		{
		}
		
		public ВводПостоянногоНачисленияИлиУдержания(byte[] УникальныйИдентификатор)
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
					,_Fld24004 [Комментарий]
					,_Fld24005RRef [Ответственный]
					,_Fld24006 [КраткийСоставДокумента]
					,_Fld24007_TYPE [ВидРасчета_Тип],_Fld24007_RRRef [ВидРасчета],_Fld24007_RTRef [ВидРасчета_Вид]
					,_Fld24008 [ДатаДействия]
					,_Fld24009 [ДатаДействияКонец]
					,_Fld24010RRef [Подразделение]
					,_Fld24011 [Действие]
					From _Document23139(NOLOCK)
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
							Комментарий = Читалка.GetString(4);
							КраткийСоставДокумента = Читалка.GetString(6);
							ДатаДействия = Читалка.GetDateTime(10);
							ДатаДействияКонец = Читалка.GetDateTime(11);
							Действие = Читалка.GetDecimal(13);
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
		
		public V82.ДокументыОбъект.ВводПостоянногоНачисленияИлиУдержания  ПолучитьОбъект()
		{
			var Объект = new V82.ДокументыОбъект.ВводПостоянногоНачисленияИлиУдержания();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Номер = Номер;
			Объект.Комментарий = Комментарий;
			Объект.Ответственный = Ответственный;
			Объект.КраткийСоставДокумента = КраткийСоставДокумента;
			Объект.ВидРасчета = ВидРасчета;
			Объект.ДатаДействия = ДатаДействия;
			Объект.ДатаДействияКонец = ДатаДействияКонец;
			Объект.Подразделение = Подразделение;
			Объект.Действие = Действие;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.ДокументыСсылка.ВводПостоянногоНачисленияИлиУдержания ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.ДокументыСсылка.ВводПостоянногоНачисленияИлиУдержания)Кэш[УИ];
			}
			var Ссылка = new V82.ДокументыСсылка.ВводПостоянногоНачисленияИлиУдержания(УникальныйИдентификатор);
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
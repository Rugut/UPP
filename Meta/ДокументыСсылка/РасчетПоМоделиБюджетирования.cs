
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
	///<summary>
	///(Упр)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class РасчетПоМоделиБюджетирования:ДокументСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("10b489ad-d7f4-4010-986e-cba1a52f3f37");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221190737.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public DateTime ДатаРасчета {get;set;}//Дата расчета
		public V82.СправочникиСсылка.СценарииПланирования Сценарий {get;set;}
		public bool ПересчитыватьРегламентно {get;set;}//Пересчитывать регламентно
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		public V82.Перечисления/*Ссылка*/.СостоянияОбъектов Состояние {get;set;}
		///<summary>
		///Любая дополнительная информация
		///</summary>
		public string/*(0)*/ Комментарий {get;set;}
		public object ОсновнойИсточникДанных {get;set;}//Основной источник данных
		public string/*(50)*/ КодОсновногоИсточника {get;set;}//Код основного источника
		
		public РасчетПоМоделиБюджетирования()
		{
		}
		
		public РасчетПоМоделиБюджетирования(byte[] УникальныйИдентификатор)
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
					,_Fld15499 [ДатаРасчета]
					,_Fld15500RRef [Сценарий]
					,_Fld15501 [ПересчитыватьРегламентно]
					,_Fld15502RRef [Ответственный]
					,_Fld15503RRef [Состояние]
					,_Fld15504 [Комментарий]
					,_Fld15505_TYPE [ОсновнойИсточникДанных_Тип],_Fld15505_RRRef [ОсновнойИсточникДанных],_Fld15505_RTRef [ОсновнойИсточникДанных_Вид]
					,_Fld15506 [КодОсновногоИсточника]
					From _Document556(NOLOCK)
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
							ДатаРасчета = Читалка.GetDateTime(4);
							ПересчитыватьРегламентно = ((byte[])Читалка.GetValue(6))[0]==1;
							Состояние = V82.Перечисления/*Ссылка*/.СостоянияОбъектов.ПустаяСсылка.Получить((byte[])Читалка.GetValue(8));
							Комментарий = Читалка.GetString(9);
							КодОсновногоИсточника = Читалка.GetString(13);
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
		
		public V82.ДокументыОбъект.РасчетПоМоделиБюджетирования  ПолучитьОбъект()
		{
			var Объект = new V82.ДокументыОбъект.РасчетПоМоделиБюджетирования();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Номер = Номер;
			Объект.ДатаРасчета = ДатаРасчета;
			Объект.Сценарий = Сценарий;
			Объект.ПересчитыватьРегламентно = ПересчитыватьРегламентно;
			Объект.Ответственный = Ответственный;
			Объект.Состояние = Состояние;
			Объект.Комментарий = Комментарий;
			Объект.ОсновнойИсточникДанных = ОсновнойИсточникДанных;
			Объект.КодОсновногоИсточника = КодОсновногоИсточника;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.ДокументыСсылка.РасчетПоМоделиБюджетирования ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.ДокументыСсылка.РасчетПоМоделиБюджетирования)Кэш[УИ];
			}
			var Ссылка = new V82.ДокументыСсылка.РасчетПоМоделиБюджетирования(УникальныйИдентификатор);
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
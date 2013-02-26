
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
	public partial class ВидыЕжегодныхОтпусков:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("b6221f64-3866-4e90-9e72-25ff02587d8c");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191738.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public string/*9*/ Код {get;set;}
		[DataMember(Name = "Представление")]//Проверить основное представление.
		[ProtoMember(3)]
		public string/*100*/ Наименование {get;set;}
		public V82.Перечисления/*Ссылка*/.СпособыРасчетаОстаткаОтпуска СпособРасчетаОстаткаОтпуска {get;set;}//Способ расчета остатка отпуска
		public decimal/*(2)*/ КоличествоДнейОтпускаВГод {get;set;}//Количество дней отпуска в год
		public bool ПредоставлятьОтпускВсемСотрудникам {get;set;}//Предоставлять отпуск всем сотрудникам
		
		public ВидыЕжегодныхОтпусков()
		{
		}
		
		public ВидыЕжегодныхОтпусков(byte[] УникальныйИдентификатор)
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
					,_Fld1937RRef [СпособРасчетаОстаткаОтпуска]
					,_Fld1938 [КоличествоДнейОтпускаВГод]
					,_Fld1939 [ПредоставлятьОтпускВсемСотрудникам]
					From _Reference50(NOLOCK)
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
							СпособРасчетаОстаткаОтпуска = V82.Перечисления/*Ссылка*/.СпособыРасчетаОстаткаОтпуска.ПустаяСсылка.Получить((byte[])Читалка.GetValue(6));
							КоличествоДнейОтпускаВГод = Читалка.GetDecimal(7);
							ПредоставлятьОтпускВсемСотрудникам = ((byte[])Читалка.GetValue(8))[0]==1;
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
		
		public V82.СправочникиОбъект.ВидыЕжегодныхОтпусков  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.ВидыЕжегодныхОтпусков();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Код = Код;
			Объект.Наименование = Наименование;
			Объект.СпособРасчетаОстаткаОтпуска = СпособРасчетаОстаткаОтпуска;
			Объект.КоличествоДнейОтпускаВГод = КоличествоДнейОтпускаВГод;
			Объект.ПредоставлятьОтпускВсемСотрудникам = ПредоставлятьОтпускВсемСотрудникам;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.СправочникиСсылка.ВидыЕжегодныхОтпусков ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.СправочникиСсылка.ВидыЕжегодныхОтпусков)Кэш[УИ];
			}
			var Ссылка = new V82.СправочникиСсылка.ВидыЕжегодныхОтпусков(УникальныйИдентификатор);
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

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
	///(Упр)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class ИсточникиДанныхДляРасчетовБюджетирования:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("648f905b-6eba-4349-b62e-8e9390606bf4");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20120928011923.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public V82.СправочникиСсылка.ИсточникиДанныхДляРасчетовБюджетирования Родитель {get;set;}
		public bool ЭтоГруппа {get;set;}
		public string/*9*/ Код {get;set;}
		[DataMember(Name = "Представление")]//Проверить основное представление.
		[ProtoMember(3)]
		public string/*100*/ Наименование {get;set;}
		public string/*(0)*/ ИмяРегистра {get;set;}//Имя регистра
		public string/*(0)*/ ПредставлениеРегистра {get;set;}//Представление регистра
		public string/*(0)*/ ТекстЗапроса {get;set;}//Текст запроса
		public ХранилищеЗначения НастройкиПостроителя {get;set;}//Настройки построителя
		public bool ПроизвольныйЗапрос {get;set;}//Произвольный запрос
		
		public ИсточникиДанныхДляРасчетовБюджетирования()
		{
		}
		
		public ИсточникиДанныхДляРасчетовБюджетирования(byte[] УникальныйИдентификатор)
			: this(УникальныйИдентификатор,0)
		{
		}
		
		public ИсточникиДанныхДляРасчетовБюджетирования(byte[] УникальныйИдентификатор,int Глубина)
		{
			if (Глубина>3)
			{
				return;
			}
			if (new Guid(УникальныйИдентификатор) == Guid.Empty)
			{
				return;
			}
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
					,_ParentIDRRef [Родитель]
					,_Folder [ЭтоГруппа]
					,_Code [Код]
					,_Description [Наименование]
					,_Fld1167 [ИмяРегистра]
					,_Fld1168 [ПредставлениеРегистра]
					,_Fld1169 [ТекстЗапроса]
					,_Fld1170 [НастройкиПостроителя]
					,_Fld1171 [ПроизвольныйЗапрос]
					From _Reference62(NOLOCK)
					Where _IDRRef=@УникальныйИдентификатор  -- and _Folder = 0x01  ";
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
							Родитель = new V82.СправочникиСсылка.ИсточникиДанныхДляРасчетовБюджетирования((byte[])Читалка.GetValue(4),Глубина+1);
							ЭтоГруппа = ((byte[])Читалка.GetValue(5))[0]==0;
							Код = Читалка.GetString(6);
							Наименование = Читалка.GetString(7);
							if(!ЭтоГруппа)
							{
								ИмяРегистра = Читалка.GetString(8);
								ПредставлениеРегистра = Читалка.GetString(9);
								ТекстЗапроса = Читалка.GetString(10);
								ПроизвольныйЗапрос = ((byte[])Читалка.GetValue(12))[0]==1;
							}
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
		
		public V82.СправочникиОбъект.ИсточникиДанныхДляРасчетовБюджетирования  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.ИсточникиДанныхДляРасчетовБюджетирования();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Родитель = Родитель;
			Объект.ЭтоГруппа = ЭтоГруппа;
			Объект.Код = Код;
			Объект.Наименование = Наименование;
			Объект.ИмяРегистра = ИмяРегистра;
			Объект.ПредставлениеРегистра = ПредставлениеРегистра;
			Объект.ТекстЗапроса = ТекстЗапроса;
			Объект.НастройкиПостроителя = НастройкиПостроителя;
			Объект.ПроизвольныйЗапрос = ПроизвольныйЗапрос;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.СправочникиСсылка.ИсточникиДанныхДляРасчетовБюджетирования ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.СправочникиСсылка.ИсточникиДанныхДляРасчетовБюджетирования)Кэш[УИ];
			}
			var Ссылка = new V82.СправочникиСсылка.ИсточникиДанныхДляРасчетовБюджетирования(УникальныйИдентификатор);
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

using System;
using System.Data.SqlClient;
using System.Globalization;
using System.Runtime.Serialization;
using ProtoBuf;/*https://github.com/ServiceStack/ServiceStack/tree/master/lib*/
using ServiceStack.Text;/*https://github.com/ServiceStack/ServiceStack.Text*/
using V82;
using V82.ОбщиеОбъекты;
using V82.ДокументыСсылка;
using V82.ДокументыОбъект;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.ДокументыОбъект
{
	///<summary>
	///(Упр)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class ЧекККМ:ДокументОбъект
	{
		public bool _ЭтоНовый;
		public bool ЭтоНовый()
		{
			return _ЭтоНовый;
		}
		[DataMember]
		[ProtoMember(1)]
		public Guid Ссылка {get;set;}
		[DataMember]
		[ProtoMember(2)]
		public long Версия {get;set;}
		[DataMember]
		[ProtoMember(3)]
		public string ВерсияДанных {get;set;}
		/*static хэш сумма состава и порядка реквизитов*/
		/*версия класса восстановленного из пакета*/
		[DataMember]
		[ProtoMember(4)]
		public bool ПометкаУдаления {get;set;}
		[DataMember]
		[ProtoMember(5)]
		public DateTime Дата {get;set;}
		[DataMember]
		[ProtoMember(6)]
		public DateTime ПрефиксНомера {get;set;}
		[DataMember]
		[ProtoMember(7)]
		public string/*11*/ Номер {get;set;}
		[DataMember]
		[ProtoMember(8)]
		public bool Проведен {get;set;}
		[DataMember]
		[ProtoMember(9)]
		public V82.Перечисления/*Ссылка*/.ВидыОперацийЧекККМ ВидОперации {get;set;}//Вид операции
		[DataMember]
		[ProtoMember(10)]
		public V82.СправочникиСсылка.Склады Склад {get;set;}
		[DataMember]
		[ProtoMember(11)]
		public V82.СправочникиСсылка.КассыККМ КассаККМ {get;set;}//Касса ККМ
		[DataMember]
		[ProtoMember(12)]
		public V82.СправочникиСсылка.ТипыЦенНоменклатуры ТипЦен {get;set;}//Тип цен
		///<summary>
		///Сумма в валюте документа, налоги включены согласно флагам
		///</summary>
		[DataMember]
		[ProtoMember(13)]
		public decimal/*(15.2)*/ СуммаДокумента {get;set;}//Сумма документа
		///<summary>
		///Любая дополнительная информация
		///</summary>
		[DataMember]
		[ProtoMember(14)]
		public string/*(0)*/ Комментарий {get;set;}
		[DataMember]
		[ProtoMember(15)]
		public V82.ДокументыСсылка.ЧекККМ ЧекККМПродажа {get;set;}//Чек ККМ (продажа)
		[DataMember]
		[ProtoMember(16)]
		public bool ЧекПробитНаККМ {get;set;}//Чек пробит на ККМ
		[DataMember]
		[ProtoMember(17)]
		public decimal/*(8)*/ НомерЧекаККМ {get;set;}//Номер чека ККМ
		[DataMember]
		[ProtoMember(18)]
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		[DataMember]
		[ProtoMember(19)]
		public V82.СправочникиСсылка.ИнформационныеКарты ДисконтнаяКарта {get;set;}//Дисконтная карта
		[DataMember]
		[ProtoMember(20)]
		public decimal/*(4)*/ НомерСменыККМ {get;set;}//Номер смены ККМ
		[DataMember]
		[ProtoMember(21)]
		public V82.СправочникиСсылка.УсловияПродаж УсловиеПродаж {get;set;}//Условие продаж
		[DataMember]
		[ProtoMember(22)]
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		[DataMember]
		[ProtoMember(23)]
		public V82.СправочникиСсылка.Контрагенты ВладелецДисконтнойКарты {get;set;}//Владелец дисконтной карты
		public void Записать()
		{
			//Установка блокировки элемента на горизантально масштабированный кластер.
			//Опционально введение тайм аута на запись одного и того же объекта, не чаще раза в 5-секунд. Защита от спама. упращение алгоритма блокировки.
			//Выделение сервиса для блокировки элемента и генерации кода
			//Выполнение операций контроля без обращений к sql-серверу.
			//Контроль конфликта блокировок.
			//Контроль загрузки булкинсертом гетерогенной коллекции.
			//Контроль уникальности кода для Документов.
			//Контроль уникальности номера для документов, в границах префикса.
			//Контроль владельца, он не может быть группой.
			//Контроль владельца он должен быть задан.
			//Контроль родителя он должен быть группой.
			//Контроль количества уровней, должен соотвествовать метаданным.
			//Контроль версии, объект не должен был быть записан перед чтением текущей записи, алгоритм версионника.
			//Контроль уникальности ссылки
			//Контроль зацикливания
			//Опционально контроль битых ссылок.
			//Соблюдейние транзакционности. ПередЗаписью. Открытие транзации. Валидации. ПриЗаписи. Фиксация транзакции. Информирование о записи элемента.
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					if(_ЭтоНовый)
					{
						Команда.CommandText = @"
						Insert Into _Document496(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld12648RRef
						,_Fld12649RRef
						,_Fld12650RRef
						,_Fld12651RRef
						,_Fld12652
						,_Fld12653
						,_Fld12654RRef
						,_Fld12655
						,_Fld12656
						,_Fld12657RRef
						,_Fld12658RRef
						,_Fld12659
						,_Fld12663RRef
						,_Fld12664RRef
						,_Fld12665RRef)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Номер
						,@ВидОперации
						,@Склад
						,@КассаККМ
						,@ТипЦен
						,@СуммаДокумента
						,@Комментарий
						,@ЧекККМПродажа
						,@ЧекПробитНаККМ
						,@НомерЧекаККМ
						,@Ответственный
						,@ДисконтнаяКарта
						,@НомерСменыККМ
						,@УсловиеПродаж
						,@Организация
						,@ВладелецДисконтнойКарты)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Document496
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld12648RRef	= @ВидОперации
						,_Fld12649RRef	= @Склад
						,_Fld12650RRef	= @КассаККМ
						,_Fld12651RRef	= @ТипЦен
						,_Fld12652	= @СуммаДокумента
						,_Fld12653	= @Комментарий
						,_Fld12654RRef	= @ЧекККМПродажа
						,_Fld12655	= @ЧекПробитНаККМ
						,_Fld12656	= @НомерЧекаККМ
						,_Fld12657RRef	= @Ответственный
						,_Fld12658RRef	= @ДисконтнаяКарта
						,_Fld12659	= @НомерСменыККМ
						,_Fld12663RRef	= @УсловиеПродаж
						,_Fld12664RRef	= @Организация
						,_Fld12665RRef	= @ВладелецДисконтнойКарты
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Номер", Номер);
					Команда.Parameters.AddWithValue("ВидОперации", ВидОперации.Ключ());
					Команда.Parameters.AddWithValue("СуммаДокумента", СуммаДокумента);
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
					Команда.Parameters.AddWithValue("ЧекККМПродажа", ЧекККМПродажа.Ссылка);
					Команда.Parameters.AddWithValue("ЧекПробитНаККМ", ЧекПробитНаККМ);
					Команда.Parameters.AddWithValue("НомерЧекаККМ", НомерЧекаККМ);
					Команда.Parameters.AddWithValue("НомерСменыККМ", НомерСменыККМ);
					Команда.ExecuteNonQuery();
				}
			}
		}
		public void Удалить()
		{
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					Команда.CommandText = @"Delete _Document496
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}

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
	///(Общ)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class ПередачаОС:ДокументОбъект
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
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(9)]
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(10)]
		public string/*(0)*/ АдресДоставки {get;set;}//Адрес доставки
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(11)]
		public string/*(0)*/ Комментарий {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(12)]
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(13)]
		public bool ОтражатьВНалоговомУчете {get;set;}//Отражать в налоговом учете
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(14)]
		public V82.ДокументыСсылка.ПодготовкаКПередачеОС ДокПодготовкаКПередачеОС {get;set;}//Документ подготовка к передаче ОС
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(15)]
		public V82.СправочникиСсылка.Валюты ВалютаДокумента {get;set;}//Валюта документа
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(16)]
		public V82.СправочникиСсылка.ДоговорыКонтрагентов ДоговорКонтрагента {get;set;}//Договор контрагента
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(17)]
		public object Сделка {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(18)]
		public V82.СправочникиСсылка.Контрагенты Контрагент {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(19)]
		public decimal/*(10)*/ КратностьВзаиморасчетов {get;set;}//Кратность взаиморасчетов
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(20)]
		public decimal/*(10.4)*/ КурсВзаиморасчетов {get;set;}//Курс взаиморасчетов
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(21)]
		public bool ОтражатьВБухгалтерскомУчете {get;set;}//Отражать в бухгалтерском учете
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(22)]
		public bool НДСВключенВСтоимость {get;set;}//НДС включен в стоимость
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(23)]
		public bool ОтражатьВУправленческомУчете {get;set;}//Отражать в управленческом учете
		///<summary>
		///(Упр)
		///</summary>
		[DataMember]
		[ProtoMember(24)]
		public V82.СправочникиСсылка.Подразделения Подразделение {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(25)]
		public bool СуммаВключаетНДС {get;set;}//Сумма включает НДС
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(26)]
		public V82.СправочникиСсылка.СобытияОС Событие {get;set;}
		///<summary>
		///(Общ) Сумма в валюте документа, налоги включены согласно флагам
		///</summary>
		[DataMember]
		[ProtoMember(27)]
		public decimal/*(15.2)*/ СуммаДокумента {get;set;}//Сумма документа
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(28)]
		public object СчетУчетаРасчетовПоАвансам {get;set;}//Счет учета расчетов по авансам
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(29)]
		public object СчетУчетаРасчетовСКонтрагентом {get;set;}//Счет учета расчетов с контрагентом
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(30)]
		public bool УчитыватьНДС {get;set;}//Учитывать НДС
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(31)]
		public V82.СправочникиСсылка.Контрагенты Грузоотправитель {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(32)]
		public V82.СправочникиСсылка.СобытияОС СобытиеРегл {get;set;}//Событие (регл)
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(33)]
		public V82.СправочникиСсылка.Контрагенты Грузополучатель {get;set;}
		[DataMember]
		[ProtoMember(34)]
		public bool ВосстановитьАмортизационнуюПремию {get;set;}//Восстановить амортизационную премию
		[DataMember]
		[ProtoMember(35)]
		public V82.СправочникиСсылка.ПрочиеДоходыИРасходы СтатьяДляВосстановленияАмортизационнойПремии {get;set;}//Статья для восстановления амортизационной премии
		[DataMember]
		[ProtoMember(36)]
		public bool ПравоСобственностиПереходитПослеГосРегистрации {get;set;}//Право собственности переходит после государственной регистрации
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
						Insert Into _Document487(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld12214RRef
						,_Fld12215
						,_Fld12216
						,_Fld12217RRef
						,_Fld12218
						,_Fld12219RRef
						,_Fld12220RRef
						,_Fld12221RRef
						,_Fld12223RRef
						,_Fld12224
						,_Fld12225
						,_Fld12226
						,_Fld12227
						,_Fld12228
						,_Fld12229RRef
						,_Fld12230
						,_Fld12231RRef
						,_Fld12232
						,_Fld12233RRef
						,_Fld12234RRef
						,_Fld12235
						,_Fld12236RRef
						,_Fld12237RRef
						,_Fld12238RRef
						,_Fld12239
						,_Fld12240RRef
						,_Fld12241)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Номер
						,@Ответственный
						,@АдресДоставки
						,@Комментарий
						,@Организация
						,@ОтражатьВНалоговомУчете
						,@ДокПодготовкаКПередачеОС
						,@ВалютаДокумента
						,@ДоговорКонтрагента
						,@Контрагент
						,@КратностьВзаиморасчетов
						,@КурсВзаиморасчетов
						,@ОтражатьВБухгалтерскомУчете
						,@НДСВключенВСтоимость
						,@ОтражатьВУправленческомУчете
						,@Подразделение
						,@СуммаВключаетНДС
						,@Событие
						,@СуммаДокумента
						,@СчетУчетаРасчетовПоАвансам
						,@СчетУчетаРасчетовСКонтрагентом
						,@УчитыватьНДС
						,@Грузоотправитель
						,@СобытиеРегл
						,@Грузополучатель
						,@ВосстановитьАмортизационнуюПремию
						,@СтатьяДляВосстановленияАмортизационнойПремии
						,@ПравоСобственностиПереходитПослеГосРегистрации)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Document487
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld12214RRef	= @Ответственный
						,_Fld12215	= @АдресДоставки
						,_Fld12216	= @Комментарий
						,_Fld12217RRef	= @Организация
						,_Fld12218	= @ОтражатьВНалоговомУчете
						,_Fld12219RRef	= @ДокПодготовкаКПередачеОС
						,_Fld12220RRef	= @ВалютаДокумента
						,_Fld12221RRef	= @ДоговорКонтрагента
						,_Fld12223RRef	= @Контрагент
						,_Fld12224	= @КратностьВзаиморасчетов
						,_Fld12225	= @КурсВзаиморасчетов
						,_Fld12226	= @ОтражатьВБухгалтерскомУчете
						,_Fld12227	= @НДСВключенВСтоимость
						,_Fld12228	= @ОтражатьВУправленческомУчете
						,_Fld12229RRef	= @Подразделение
						,_Fld12230	= @СуммаВключаетНДС
						,_Fld12231RRef	= @Событие
						,_Fld12232	= @СуммаДокумента
						,_Fld12233RRef	= @СчетУчетаРасчетовПоАвансам
						,_Fld12234RRef	= @СчетУчетаРасчетовСКонтрагентом
						,_Fld12235	= @УчитыватьНДС
						,_Fld12236RRef	= @Грузоотправитель
						,_Fld12237RRef	= @СобытиеРегл
						,_Fld12238RRef	= @Грузополучатель
						,_Fld12239	= @ВосстановитьАмортизационнуюПремию
						,_Fld12240RRef	= @СтатьяДляВосстановленияАмортизационнойПремии
						,_Fld12241	= @ПравоСобственностиПереходитПослеГосРегистрации
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Номер", Номер);
					Команда.Parameters.AddWithValue("АдресДоставки", АдресДоставки);
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
					Команда.Parameters.AddWithValue("ОтражатьВНалоговомУчете", ОтражатьВНалоговомУчете);
					Команда.Parameters.AddWithValue("ДокПодготовкаКПередачеОС", ДокПодготовкаКПередачеОС.Ссылка);
					Команда.Parameters.AddWithValue("КратностьВзаиморасчетов", КратностьВзаиморасчетов);
					Команда.Parameters.AddWithValue("КурсВзаиморасчетов", КурсВзаиморасчетов);
					Команда.Parameters.AddWithValue("ОтражатьВБухгалтерскомУчете", ОтражатьВБухгалтерскомУчете);
					Команда.Parameters.AddWithValue("НДСВключенВСтоимость", НДСВключенВСтоимость);
					Команда.Parameters.AddWithValue("ОтражатьВУправленческомУчете", ОтражатьВУправленческомУчете);
					Команда.Parameters.AddWithValue("СуммаВключаетНДС", СуммаВключаетНДС);
					Команда.Parameters.AddWithValue("СуммаДокумента", СуммаДокумента);
					Команда.Parameters.AddWithValue("СчетУчетаРасчетовПоАвансам", Guid.Empty);
					Команда.Parameters.AddWithValue("СчетУчетаРасчетовСКонтрагентом", Guid.Empty);
					Команда.Parameters.AddWithValue("УчитыватьНДС", УчитыватьНДС);
					Команда.Parameters.AddWithValue("ВосстановитьАмортизационнуюПремию", ВосстановитьАмортизационнуюПремию);
					Команда.Parameters.AddWithValue("ПравоСобственностиПереходитПослеГосРегистрации", ПравоСобственностиПереходитПослеГосРегистрации);
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
					Команда.CommandText = @"Delete _Document487
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}
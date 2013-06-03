
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
	public partial class ПеремещениеТоваров:ДокументОбъект
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
		public V82.Перечисления/*Ссылка*/.ВидыОперацийПеремещениеТоваров ВидОперации {get;set;}//Вид операции
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(10)]
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(11)]
		public bool ОтражатьВУправленческомУчете {get;set;}//Отражать в управленческом учете
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(12)]
		public bool ОтражатьВБухгалтерскомУчете {get;set;}//Отражать в бухгалтерском учете
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(13)]
		public bool ОтражатьВНалоговомУчете {get;set;}//Отражать в налоговом учете
		///<summary>
		///(Упр)
		///</summary>
		[DataMember]
		[ProtoMember(14)]
		public V82.СправочникиСсылка.Подразделения Подразделение {get;set;}
		///<summary>
		///(Общ) Любая дополнительная информация
		///</summary>
		[DataMember]
		[ProtoMember(15)]
		public string/*(0)*/ Комментарий {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(16)]
		public V82.СправочникиСсылка.Склады СкладОтправитель {get;set;}//Склад отправитель
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(17)]
		public V82.СправочникиСсылка.Склады СкладПолучатель {get;set;}//Склад получатель
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(18)]
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		[DataMember]
		[ProtoMember(19)]
		public V82.ДокументыСсылка.ВнутреннийЗаказ ВнутреннийЗаказ {get;set;}//Внутренний заказ
		///<summary>
		///Необходимые действия по включению или исключению НДС в стоимости товаров при перемещении
		///</summary>
		[DataMember]
		[ProtoMember(20)]
		public V82.Перечисления/*Ссылка*/.ДействиеНДСВСтоимостиТоваров НДСвСтоимостиТоваров {get;set;}//НДС в стоимости товаров
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(21)]
		public object СчетСписанияНДС {get;set;}//Счет списания НДС
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(22)]
		public object СубконтоСписанияНДС1 {get;set;}//Субконто 1
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(23)]
		public object СубконтоСписанияНДС2 {get;set;}//Субконто 2
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(24)]
		public object СубконтоСписанияНДС3 {get;set;}//Субконто 3
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(25)]
		public object СчетСписанияНДСНУ {get;set;}//Счет списания НДС (НУ)
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(26)]
		public object СубконтоСписанияНДСНУ1 {get;set;}//Субконто 1 (налоговый учет)
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(27)]
		public object СубконтоСписанияНДСНУ2 {get;set;}//Субконто 2 (налоговый учет)
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(28)]
		public object СубконтоСписанияНДСНУ3 {get;set;}//Субконто 3 (налоговый учет)
		///<summary>
		///Для НДС
		///</summary>
		[DataMember]
		[ProtoMember(29)]
		public V82.СправочникиСсылка.НоменклатурныеГруппы НоменклатурнаяГруппа {get;set;}//Номенклатурная группа
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(30)]
		public V82.СправочникиСсылка.СтатьиЗатрат СтатьяЗатратСписанияНДС {get;set;}//Статья затрат списания НДС
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(31)]
		public V82.СправочникиСсылка.ПодразделенияОрганизаций ПодразделениеОрганизации {get;set;}//Подразделение организации
		///<summary>
		///(Общ) Сумма в розничных ценах
		///</summary>
		[DataMember]
		[ProtoMember(32)]
		public decimal/*(15.2)*/ СуммаДокументаРозничная {get;set;}//Розничная сумма документа
		[DataMember]
		[ProtoMember(33)]
		public bool РаспределениеОстатковТоваровОрганизацийПоСкладам {get;set;}//Распределение остатков товаров организаций по складам
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
						Insert Into _Document492(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld12433RRef
						,_Fld12434RRef
						,_Fld12435
						,_Fld12436
						,_Fld12437
						,_Fld12438RRef
						,_Fld12439
						,_Fld12440RRef
						,_Fld12441RRef
						,_Fld12442RRef
						,_Fld12443RRef
						,_Fld12444RRef
						,_Fld12445RRef
						,_Fld12446RRef
						,_Fld12447RRef
						,_Fld12448RRef
						,_Fld12449RRef
						,_Fld12450RRef
						,_Fld12451RRef
						,_Fld12452RRef
						,_Fld12453RRef
						,_Fld12454RRef
						,_Fld12455RRef
						,_Fld12456
						,_Fld12457)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Номер
						,@ВидОперации
						,@Организация
						,@ОтражатьВУправленческомУчете
						,@ОтражатьВБухгалтерскомУчете
						,@ОтражатьВНалоговомУчете
						,@Подразделение
						,@Комментарий
						,@СкладОтправитель
						,@СкладПолучатель
						,@Ответственный
						,@ВнутреннийЗаказ
						,@НДСвСтоимостиТоваров
						,@СчетСписанияНДС
						,@СубконтоСписанияНДС1
						,@СубконтоСписанияНДС2
						,@СубконтоСписанияНДС3
						,@СчетСписанияНДСНУ
						,@СубконтоСписанияНДСНУ1
						,@СубконтоСписанияНДСНУ2
						,@СубконтоСписанияНДСНУ3
						,@НоменклатурнаяГруппа
						,@СтатьяЗатратСписанияНДС
						,@ПодразделениеОрганизации
						,@СуммаДокументаРозничная
						,@РаспределениеОстатковТоваровОрганизацийПоСкладам)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Document492
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld12433RRef	= @ВидОперации
						,_Fld12434RRef	= @Организация
						,_Fld12435	= @ОтражатьВУправленческомУчете
						,_Fld12436	= @ОтражатьВБухгалтерскомУчете
						,_Fld12437	= @ОтражатьВНалоговомУчете
						,_Fld12438RRef	= @Подразделение
						,_Fld12439	= @Комментарий
						,_Fld12440RRef	= @СкладОтправитель
						,_Fld12441RRef	= @СкладПолучатель
						,_Fld12442RRef	= @Ответственный
						,_Fld12443RRef	= @ВнутреннийЗаказ
						,_Fld12444RRef	= @НДСвСтоимостиТоваров
						,_Fld12445RRef	= @СчетСписанияНДС
						,_Fld12446RRef	= @СубконтоСписанияНДС1
						,_Fld12447RRef	= @СубконтоСписанияНДС2
						,_Fld12448RRef	= @СубконтоСписанияНДС3
						,_Fld12449RRef	= @СчетСписанияНДСНУ
						,_Fld12450RRef	= @СубконтоСписанияНДСНУ1
						,_Fld12451RRef	= @СубконтоСписанияНДСНУ2
						,_Fld12452RRef	= @СубконтоСписанияНДСНУ3
						,_Fld12453RRef	= @НоменклатурнаяГруппа
						,_Fld12454RRef	= @СтатьяЗатратСписанияНДС
						,_Fld12455RRef	= @ПодразделениеОрганизации
						,_Fld12456	= @СуммаДокументаРозничная
						,_Fld12457	= @РаспределениеОстатковТоваровОрганизацийПоСкладам
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Номер", Номер);
					Команда.Parameters.AddWithValue("ВидОперации", ВидОперации.Ключ());
					Команда.Parameters.AddWithValue("ОтражатьВУправленческомУчете", ОтражатьВУправленческомУчете);
					Команда.Parameters.AddWithValue("ОтражатьВБухгалтерскомУчете", ОтражатьВБухгалтерскомУчете);
					Команда.Parameters.AddWithValue("ОтражатьВНалоговомУчете", ОтражатьВНалоговомУчете);
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
					Команда.Parameters.AddWithValue("ВнутреннийЗаказ", ВнутреннийЗаказ.Ссылка);
					Команда.Parameters.AddWithValue("НДСвСтоимостиТоваров", НДСвСтоимостиТоваров.Ключ());
					Команда.Parameters.AddWithValue("СчетСписанияНДС", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоСписанияНДС1", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоСписанияНДС2", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоСписанияНДС3", Guid.Empty);
					Команда.Parameters.AddWithValue("СчетСписанияНДСНУ", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоСписанияНДСНУ1", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоСписанияНДСНУ2", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоСписанияНДСНУ3", Guid.Empty);
					Команда.Parameters.AddWithValue("СуммаДокументаРозничная", СуммаДокументаРозничная);
					Команда.Parameters.AddWithValue("РаспределениеОстатковТоваровОрганизацийПоСкладам", РаспределениеОстатковТоваровОрганизацийПоСкладам);
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
					Команда.CommandText = @"Delete _Document492
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}
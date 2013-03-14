Ext.define('Справочники.ДоговорыКонтрагентов.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:320px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Договоры контрагентов',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:174px;top:32px;width:598px;height:280px;',
			height: 280,width: 598,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Код',
					width:'40',
				},
				{
					text:'Наименование',
					width:'220',
				},
				{
					text:'Валюта',
					width:'60',
				},
				{
					text:'Контрагент',
					width:'120',
				},
				{
					text:'Организация',
					width:'120',
				},
				{
					text:'Вид договора',
					width:'120',
				},
				{
					text:'Номер',
					width:'80',
				},
				{
					text:'Дата',
					width:'80',
				},
				{
					text:'Ведение взаиморасчетов',
					width:'120',
				},
				{
					text:'Вид взаиморасчетов',
					width:'120',
				},
				{
					text:'Вид условий договора',
					width:'120',
				},
				{
					text:'Держать резерв без оплаты ограниченное время',
					width:'120',
				},
				{
					text:'Допустимая сумма дебиторской задолженности',
					width:'120',
				},
				{
					text:'Допустимое число дней дебиторской задолженности',
					width:'120',
				},
				{
					text:'Комментарий',
					width:'100',
				},
				{
					text:'Контролировать сумму дебиторской задолженности',
					width:'60',
				},
				{
					text:'Контролировать число дней дебиторской задолженности',
					width:'60',
				},
				{
					text:'Обособленный учет Товаров по заказам покупателей',
					width:'60',
				},
				{
					text:'Процент комиссионного вознаграждения',
					width:'80',
				},
				{
					text:'Процент предоплаты',
					width:'80',
				},
				{
					text:'Способ расчета комиссионного вознаграждения',
					width:'120',
				},
				{
					text:'Тип цен',
					width:'129',
				},
				{
					text:'Число дней резерва без оплаты',
					width:'70',
				},
				{
					text:'Учет агентского НДС',
					width:'70',
				},
				{
					text:'Вид агентского договора',
					width:'100',
				},
				{
					text:'Контролировать денежные средства комитента',
					width:'70',
				},
				{
					text:'Расчеты в условных единицах',
					width:'70',
				},
				{
					text:'По документам расчетов с контрагентом',
					width:'70',
				},
				{
					text:'Основной проект',
					width:'225',
				},
				{
					text:'Реализация на экспорт',
					width:'70',
				},
				{
					text:'Основная статья движения денежных средств',
					width:'350',
				},
				{
					text:'Срок действия договора',
					width:'84',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:32px;width:160px;height:280px;',
			height: 280,width: 160,
			columns:
			[
				{
					text:'Наименование',
					width:'220',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				{
					text:'Файлы',
				},
					]
				},
				'-',
				{
					text:'Свойства',
				},
				{
					text:'Категории',
				},
				'-',
				{
					text:'Файлы',
				},
			]
		},
	]
});
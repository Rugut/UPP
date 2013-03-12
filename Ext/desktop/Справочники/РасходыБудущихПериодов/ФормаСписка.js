Ext.define('Справочники.РасходыБудущихПериодов.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Расходы будущих периодов',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:195px;top:33px;width:577px;height:380px;',
			height: 380,width: 577,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Код',
					width:'72',
				},
				{
					text:'Наименование',
					width:'220',
				},
				{
					text:'Вид РБП',
					width:'220',
				},
				{
					text:'Способ признания расходов',
					width:'100',
				},
				{
					text:'Сумма',
					width:'80',
				},
				{
					text:'Начало списания',
					width:'80',
				},
				{
					text:'Окончание списания',
					width:'80',
				},
				{
					text:'Подразделение',
					width:'120',
				},
				{
					text:'Подразделение (орг.)',
					width:'120',
				},
				{
					text:'Статья затрат',
					width:'120',
				},
				{
					text:'Счет',
					width:'80',
				},
				{
					text:'Счет (НУ)',
					width:'80',
				},
				{
					text:'Хар-р затрат',
					width:'120',
				},
				{
					text:'Вид аналитики',
					width:'284',
				},
				{
					text:'Вид аналитики (доп.)',
					width:'284',
				},
				{
					text:'Вид субконто 1',
					width:'95',
				},
				{
					text:'Вид субконто 2',
					width:'95',
				},
				{
					text:'Вид субконто 3',
					width:'95',
				},
				{
					text:'Вид субконто 1 (НУ)',
					width:'79',
				},
				{
					text:'Вид субконто 2 (НУ)',
					width:'79',
				},
				{
					text:'Вид субконто 3 (НУ)',
					width:'79',
				},
				{
					text:'Аналитика',
					width:'130',
				},
				{
					text:'Номенклатурная группа',
					width:'202',
				},
				{
					text:'Номенклатурная группа (доп)',
					width:'156',
				},
				{
					text:'Способ распределения затрат на выпуск',
					width:'165',
				},
				{
					text:'Субконто 1',
					width:'102',
				},
				{
					text:'Субконто 2',
					width:'108',
				},
				{
					text:'Субконто 3',
					width:'124',
				},
				{
					text:'Субконто 1 (НУ)',
					width:'102',
				},
				{
					text:'Субконто 2 (НУ)',
					width:'108',
				},
				{
					text:'Субконто 3 (НУ)',
					width:'124',
				},
				{
					text:'Продукция',
					width:'102',
				},
				{
					text:'Характеристика продукции',
					width:'108',
				},
				{
					text:'Серия продукции',
					width:'124',
				},
				{
					text:'Объект строительства',
					width:'112',
				},
				{
					text:'Способ строительства',
					width:'129',
				},
				{
					text:'Вид актива',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:174px;height:380px;',
			height: 380,width: 174,
			columns:
			[
				{
					text:'Код',
					width:'89',
				},
				{
					text:'Наименование',
					width:'361',
				},
			]
		},
	]
});
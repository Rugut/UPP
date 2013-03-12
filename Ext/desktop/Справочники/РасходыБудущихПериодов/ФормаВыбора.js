Ext.define('Справочники.РасходыБудущихПериодов.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:716px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Справочник Расходы будущих периодов',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:716px;height:25px;',
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:142px;height:284px;',
			height: 284,width: 142,
			columns:
			[
				{
					text:'Код',
					width:'79',
				},
				{
					text:'Наименование',
					width:'371',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:157px;top:33px;width:551px;height:284px;',
			height: 284,width: 551,
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
					width:'117',
				},
				{
					text:'Номенклатурная группа',
					width:'183',
				},
				{
					text:'Номенклатурная группа (доп)',
					width:'154',
				},
				{
					text:'Способ распределения затрат на выпуск',
					width:'154',
				},
				{
					text:'Субконто 1',
					width:'101',
				},
				{
					text:'Субконто 2',
					width:'101',
				},
				{
					text:'Субконто 3',
					width:'101',
				},
				{
					text:'Субконто 1 (НУ)',
					width:'101',
				},
				{
					text:'Субконто 2 (НУ)',
					width:'101',
				},
				{
					text:'Субконто 3 (НУ)',
					width:'101',
				},
				{
					text:'Продукция',
					width:'101',
				},
				{
					text:'Характеристика продукции',
					width:'101',
				},
				{
					text:'Серия продукции',
					width:'101',
				},
				{
					text:'Объект строительства',
					width:'117',
				},
				{
					text:'Способ строительства',
					width:'110',
				},
				{
					text:'Вид актива',
					width:'100',
				},
			]
		},
	]
});
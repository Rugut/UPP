Ext.define('Справочники.НаправленияСписанияВыпущеннойПродукции.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:616px;height:450px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Направления списания выпущенной продукции (услуг)',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:502px;top:33px;width:40px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:544px;top:33px;width:64px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:33px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:33px;width:406px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:398px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:398px;width:514px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:616px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:425px;width:616px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'OK',
				},
				'-',
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:96px;width:600px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:120px;width:600px;height:272px;',
			height: 272,width: 600,
			columns:
			[
				{
					text:'№',
					width:'28',
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
					text:'Счет затрат',
					width:'80',
				},
				{
					text:'Счет затрат (НУ)',
					width:'80',
				},
				{
					text:'Хар-р затрат',
					width:'80',
				},
				{
					text:'Вид аналитики',
					width:'208',
				},
				{
					text:'Вид аналитики (доп)',
					width:'208',
				},
				{
					text:'Вид субконто 1',
					width:'69',
				},
				{
					text:'Вид субконто 2',
					width:'69',
				},
				{
					text:'Вид субконто 3',
					width:'69',
				},
				{
					text:'Вид субконто 1 (НУ)',
					width:'87',
				},
				{
					text:'Вид субконто 2 (НУ)',
					width:'87',
				},
				{
					text:'Вид субконто 3 (НУ)',
					width:'87',
				},
				{
					text:'Аналитика',
					width:'89',
				},
				{
					text:'Номенклатурная группа',
					width:'89',
				},
				{
					text:'Субконто 1',
					width:'73',
				},
				{
					text:'Субконто 2',
					width:'73',
				},
				{
					text:'Субконто 3',
					width:'73',
				},
				{
					text:'Субконто 1 (НУ)',
					width:'58',
				},
				{
					text:'Субконто 2 (НУ)',
					width:'58',
				},
				{
					text:'Субконто 3 (НУ)',
					width:'58',
				},
				{
					text:'Продукция',
					width:'116',
				},
				{
					text:'Характеристика продукции',
					width:'116',
				},
				{
					text:'Серия продукции',
					width:'116',
				},
				{
					text:'Объект строительства',
					width:'87',
				},
				{
					text:'Способ строительства',
					width:'86',
				},
				{
					text:'Заказ',
					width:'100',
				},
				{
					text:'Проект',
					width:'100',
				},
				{
					text:'Коэффициент',
					width:'98',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:94px;top:57px;width:514px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:57px;width:84px;height:19px;text-align:left;',
		},
	]
});
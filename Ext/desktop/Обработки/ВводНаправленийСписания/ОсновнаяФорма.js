Ext.define('Обработки.ВводНаправленийСписания.ОсновнаяФорма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:600px;height:450px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Ввод направлений списания продукции (услуг)',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:600px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:425px;width:600px;height:25px;',
			items:
			[
				{
					text:'ОК',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьНоменклатура',
			text: 'Номенклатура (характеристика, серия):',
			style: 'position:absolute;left:8px;top:59px;width:134px;height:27px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номенклатура',
			style: 'position:absolute;left:142px;top:59px;width:160px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ХарактеристикаНоменклатуры',
			style: 'position:absolute;left:307px;top:59px;width:140px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СерияНоменклатуры',
			style: 'position:absolute;left:452px;top:59px;width:140px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоличество',
			text: 'Количество:',
			style: 'position:absolute;left:8px;top:86px;width:134px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Количество',
			style: 'position:absolute;left:142px;top:86px;width:89px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЕдиницаИзмерения',
			text: 'Единица:',
			style: 'position:absolute;left:239px;top:86px;width:63px;height:19px;text-align:right;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЕдиницаИзмерения',
			style: 'position:absolute;left:307px;top:86px;width:69px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерСтрокиТабличнойЧасти',
			text: 'Номер строки документа:',
			style: 'position:absolute;left:8px;top:33px;width:134px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерСтрокиТабличнойЧасти',
			style: 'position:absolute;left:142px;top:33px;width:89px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:149px;width:584px;height:268px;',
			height: 268,width: 584,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'Подразделение',
					width:'120',
				},
				{
					text:'Подразделение организации',
					width:'120',
				},
				{
					text:'Заказ',
					width:'97',
				},
				{
					text:'Статья затрат',
					width:'106',
				},
				{
					text:'Счет затрат',
					width:'100',
				},
				{
					text:'Счет затрат (НУ)',
					width:'100',
				},
				{
					text:'Хар-р затрат',
					width:'100',
				},
				{
					text:'Вид аналитики',
					width:'100',
				},
				{
					text:'Вид аналитики (доп)',
					width:'100',
				},
				{
					text:'Вид субконто 1',
					width:'100',
				},
				{
					text:'Вид субконто 2',
					width:'97',
				},
				{
					text:'Вид субконто 3',
					width:'103',
				},
				{
					text:'Вид субконто 1 (НУ)',
					width:'100',
				},
				{
					text:'Вид субконто 2 (НУ)',
					width:'100',
				},
				{
					text:'Вид субконто 3 (НУ)',
					width:'100',
				},
				{
					text:'Аналитика',
					width:'204',
				},
				{
					text:'Номенклатурная группа',
					width:'100',
				},
				{
					text:'Номенклатурная группа (доп)',
					width:'100',
				},
				{
					text:'Субконто 1',
					width:'100',
				},
				{
					text:'Субконто 2',
					width:'100',
				},
				{
					text:'Субконто 3',
					width:'100',
				},
				{
					text:'Субконто 1 (НУ)',
					width:'100',
				},
				{
					text:'Субконто 2 (НУ)',
					width:'100',
				},
				{
					text:'Субконто 3 (НУ)',
					width:'100',
				},
				{
					text:'Продукция',
					width:'100',
				},
				{
					text:'Характеристика продукции',
					width:'100',
				},
				{
					text:'Серия продукции',
					width:'100',
				},
				{
					text:'Объект строительства',
					width:'100',
				},
				{
					text:'Способ строительства',
					width:'100',
				},
				{
					text:'Коэффициент',
					width:'100',
				},
				{
					text:'Проект',
					width:'100',
				},
				{
					text:'В т.ч. отпущено сверх лимита',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:125px;width:584px;height:24px;',
			items:
			[
				{
					text:'Заполнить из шаблона',
				},
				{
					text:'Добавить из шаблона',
				},
			]
		},
	]
});
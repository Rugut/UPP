Ext.define('Справочники.ВидыОплатЧекаККМ.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:454px;height:180px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Вид оплаты чека ККМ',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:454px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:155px;width:454px;height:25px;',
			items:
			[
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
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:358px;top:33px;width:23px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:386px;top:33px;width:60px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:33px;width:134px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:148px;top:33px;width:204px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТипОплаты',
			text: 'Тип оплаты:',
			style: 'position:absolute;left:8px;top:57px;width:134px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТипОплаты',
			style: 'position:absolute;left:148px;top:57px;width:298px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:80px;width:438px;height:67px;',
			height: 67,width: 438,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьБанкКредитор',
			text: 'Банк-кредитор:',
			style: 'position:absolute;left:0px;top:0px;width:134px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'БанкКредитор',
			style: 'position:absolute;left:140px;top:0px;width:298px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДоговорВзаиморасчетовБанкаКредитора',
			text: 'Договор взаиморасчетов:',
			style: 'position:absolute;left:0px;top:24px;width:134px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоговорВзаиморасчетовБанкаКредитора',
			style: 'position:absolute;left:140px;top:24px;width:298px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроцентБанковскойКомиссии',
			text: '% банковской комиссии:',
			style: 'position:absolute;left:0px;top:48px;width:134px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроцентБанковскойКомиссии',
			style: 'position:absolute;left:140px;top:48px;width:92px;height:19px;',
		},
					]
				},
			]
		},
	]
});
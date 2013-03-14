Ext.define('Справочники.ДоходыЕСН.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:406px;height:148px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Способы отражения доходов в учете ЕСН',
	
	items:
	[
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
			style: 'position:absolute;left:94px;top:33px;width:304px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:406px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:123px;width:406px;height:25px;',
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
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:60px;width:390px;height:55px;',
			height: 55,width: 390,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Не предопределенный',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Входит в базу ФОМС',
			style: 'position:absolute;left:0px;top:0px;width:128px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Входит в базу ФСС',
			style: 'position:absolute;left:0px;top:21px;width:120px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Входит в базу взносов в федеральный бюджет',
			style: 'position:absolute;left:0px;top:40px;width:260px;height:15px;',
		},
					]
				},
				{
					title:'Предопределенный',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПредставлениеКодаДоходаПоЕСН',
			text: '',
			style: 'position:absolute;left:1px;top:0px;width:389px;height:55px;',
		},
					]
				},
			]
		},
	]
});
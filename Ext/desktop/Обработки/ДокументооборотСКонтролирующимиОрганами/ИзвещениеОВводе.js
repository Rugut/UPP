Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.ИзвещениеОВводе',
	{
	extend: 'Ext.window.Window',
	height: 280,width: 563,
	iconCls: 'bogus',
	title: 'Извещение о вводе',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:255px;width:563px;height:25px;',
			items:
			[
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИмяОбрабФайла',
			style: 'position:absolute;left:193px;top:46px;width:362px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИдФайл',
			style: 'position:absolute;left:193px;top:72px;width:362px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИдДок',
			style: 'position:absolute;left:193px;top:98px;width:362px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КНД',
			style: 'position:absolute;left:193px;top:124px;width:362px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаимОтч',
			style: 'position:absolute;left:193px;top:150px;width:362px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомКорр',
			style: 'position:absolute;left:193px;top:176px;width:362px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтчетГод',
			style: 'position:absolute;left:193px;top:228px;width:362px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтчетныйПериод',
			style: 'position:absolute;left:193px;top:202px;width:362px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НалоговыйОрган',
			style: 'position:absolute;left:193px;top:8px;width:362px;height:19px;',
		},
	]
});
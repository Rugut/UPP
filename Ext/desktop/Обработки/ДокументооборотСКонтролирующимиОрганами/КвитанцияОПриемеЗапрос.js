Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.КвитанцияОПриемеЗапрос',
	{
	extend: 'Ext.window.Window',
	height: 256,width: 563,
	iconCls: 'bogus',
	title: 'Квитанция о приеме',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:231px;width:563px;height:25px;',
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
			name: 'ИмяПринятФайла',
			style: 'position:absolute;left:193px;top:47px;width:362px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаВремяПредст',
			style: 'position:absolute;left:193px;top:73px;width:362px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаПост',
			style: 'position:absolute;left:193px;top:152px;width:362px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КНД',
			style: 'position:absolute;left:193px;top:99px;width:362px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаимВидДок',
			style: 'position:absolute;left:193px;top:125px;width:362px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РегНом',
			style: 'position:absolute;left:193px;top:204px;width:362px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаПрин',
			style: 'position:absolute;left:193px;top:178px;width:362px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НалоговыйОрган',
			style: 'position:absolute;left:193px;top:9px;width:362px;height:19px;',
		},
	]
});
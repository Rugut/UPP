Ext.define('Обработки.РегистрацияИзмененийДляОбмена.ИзменениеНомеровСообщений',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:278px;height:87px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Изменение номеров сообщений',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:62px;width:278px;height:25px;',
			items:
			[
				{
					text:'Изменить',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьНомерОтправленного',
			text: 'Номер отправленного сообщения:',
			style: 'position:absolute;left:8px;top:10px;width:176px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерОтправленного',
			style: 'position:absolute;left:190px;top:10px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерПринятого',
			text: 'Номер принятого сообщения:',
			style: 'position:absolute;left:8px;top:35px;width:176px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерПринятого',
			style: 'position:absolute;left:190px;top:35px;width:80px;height:19px;',
		},
	]
});
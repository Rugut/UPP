Ext.define('Обработки.ОнлайнСервисыРегламентированнойОтчетности.РедактированиеПараметровПрокси',
	{
	extend: 'Ext.window.Window',
	height: 133,width: 323,
	iconCls: 'bogus',
	title: 'Ошибка доступа в Интернет',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:108px;width:323px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'ОК',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИмяПользователя',
			style: 'position:absolute;left:125px;top:56px;width:190px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Пароль',
			style: 'position:absolute;left:125px;top:81px;width:190px;height:19px;',
		},
	]
});
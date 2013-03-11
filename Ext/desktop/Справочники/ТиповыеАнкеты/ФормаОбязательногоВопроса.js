Ext.define('Справочники.ТиповыеАнкеты.ФормаОбязательногоВопроса',
	{
	extend: 'Ext.window.Window',
	height: 303,width: 294,
	iconCls: 'bogus',
	title: 'Настройка обязательности ответа на вопрос',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:278px;width:294px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'ОК',
				},
				{
					text:'Отмена',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВопросУсловия',
			style: 'position:absolute;left:25px;top:140px;width:261px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответ',
			style: 'position:absolute;left:160px;top:183px;width:126px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:159px;top:182px;width:127px;height:88px;',
			height: 88,width: 127,
			columns:
			[
				{
					text:'ЗначениеСписка',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'УсловиеОтвета',
			style: 'position:absolute;left:25px;top:183px;width:129px;height:19px;',
		},
	]
});
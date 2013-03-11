Ext.define('Документы.РеализацияТоваровУслуг.ФормаФормированияПакетаДокументов',
	{
	extend: 'Ext.window.Window',
	height: 501,width: 376,
	iconCls: 'bogus',
	title: 'Оформить документы',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:476px;width:376px;height:25px;',
			items:
			[
				{
					text:'СформироватьДокументы',
				},
				{
					text:'ЗначенияПоУмолчанию',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоЭкземпляровРеализации',
			style: 'position:absolute;left:264px;top:48px;width:97px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоЭкземпляровСчетаФактуры',
			style: 'position:absolute;left:264px;top:247px;width:97px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоЭкземпляровПКО',
			style: 'position:absolute;left:264px;top:369px;width:97px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОснованиеПКО',
			style: 'position:absolute;left:126px;top:321px;width:235px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоЭкземпляровРасходныйОрдерНаТовары',
			style: 'position:absolute;left:264px;top:147px;width:97px;height:19px;',
		},
	]
});
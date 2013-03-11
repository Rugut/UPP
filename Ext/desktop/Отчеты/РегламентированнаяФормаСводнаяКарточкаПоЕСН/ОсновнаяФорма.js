Ext.define('Отчеты.РегламентированнаяФормаСводнаяКарточкаПоЕСН.ОсновнаяФорма',
	{
	extend: 'Ext.window.Window',
	height: 387,width: 651,
	iconCls: 'bogus',
	title: 'Сводная карточка ЕСН',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:86px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:651px;height:25px;',
			items:
			[
				{
					text:'ДействиеНовыйОтчет',
				},
				{
					text:'СохранитьЗначения___',
				},
				{
					text:'ДействиеНовыйОтчет',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие',
				},
				{
					text:'ВыполнитьПечать',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие4',
				},
				{
					text:'ВыполнитьПечать',
				},
				{
					text:'Подменю',
				},
				{
					text:'ВосстановитьЗначения___',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Сформировать1',
				},
				{
					text:'Сформировать',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НалоговыйПериод',
			style: 'position:absolute;left:432px;top:33px;width:80px;height:19px;',
		},
	]
});
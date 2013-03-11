Ext.define('Отчеты.РегламентированнаяФормаСводнаяКарточкаПоОПС.ОсновнаяФорма',
	{
	extend: 'Ext.window.Window',
	height: 387,width: 651,
	iconCls: 'bogus',
	title: 'Сводная карточка ОПС',
	
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
					text:'ВосстановитьЗначения___',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Сформировать',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'ВыполнитьПечать',
				},
				{
					text:'ДействиеНовыйОтчет',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'ДействиеНовыйОтчет',
				},
				{
					text:'СохранитьЗначения___',
				},
				{
					text:'Сформировать1',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'ВыполнитьПечать',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие4',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Подменю',
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
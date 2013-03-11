Ext.define('Отчеты.РегламентированнаяФормаКарточкаПоОПС.ОсновнаяФорма',
	{
	extend: 'Ext.window.Window',
	height: 412,width: 660,
	iconCls: 'bogus',
	title: 'Индивидуальная карточка ОПС',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:86px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ФизЛицо',
			style: 'position:absolute;left:86px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:660px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'СохранитьЗначения___',
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
					text:'ДействиеНовыйОтчет',
				},
				{
					text:'ВосстановитьЗначения___',
				},
				{
					text:'Подменю',
				},
				{
					text:'ВыполнитьПечать',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'ДействиеНовыйОтчет',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Сформировать1',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'ВыполнитьПечать',
				},
				{
					text:'Действие4',
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
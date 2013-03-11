Ext.define('Отчеты.РегламентированнаяФормаКарточкаПоЕСН.ОсновнаяФорма',
	{
	extend: 'Ext.window.Window',
	height: 412,width: 660,
	iconCls: 'bogus',
	title: 'Индивидуальная карточка ЕСН',
	
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
					text:'Сформировать',
				},
				{
					text:'СохранитьЗначения___',
				},
				{
					text:'ДействиеНовыйОтчет',
				},
				{
					text:'Сформировать1',
				},
				{
					text:'ДействиеНовыйОтчет',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ВосстановитьЗначения___',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ВыполнитьПечать',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Подменю',
				},
				{
					text:'ВыполнитьПечать',
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
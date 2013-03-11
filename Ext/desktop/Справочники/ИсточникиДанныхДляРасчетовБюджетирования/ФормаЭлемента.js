Ext.define('Справочники.ИсточникиДанныхДляРасчетовБюджетирования.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 440,width: 601,
	iconCls: 'bogus',
	title: 'Элемент Источники данных для расчетов бюджетирования',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:601px;height:25px;',
			items:
			[
				{
					text:'Проверить',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'ПроизвольныйЗапрос',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:415px;width:601px;height:25px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:33px;width:370px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПредставлениеРегистра',
			style: 'position:absolute;left:94px;top:57px;width:499px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:84px;width:585px;height:323px;',
			height: 323,width: 585,
			items:
			[
				{
					title:'Данные',
				},
				{
					title:'Отбор',
				},
				{
					title:'Настройка',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:512px;top:33px;width:81px;height:19px;',
		},
	]
});
Ext.define('Справочники.ХранилищеДополнительнойИнформации.ФормаИзображения',
	{
	extend: 'Ext.window.Window',
	height: 386,width: 400,
	iconCls: 'bogus',
	title: 'Форма данных об изображении',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:142px;top:58px;width:250px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:400px;height:25px;',
			items:
			[
				{
					text:'Разделитель5',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Перечитать',
				},
				{
					text:'Подменю',
				},
				{
					text:'ИзменитьИзображение1',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие1',
				},
				{
					text:'СохранитьИзображение',
				},
				{
					text:'Действие3',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'СохранитьИзображение1',
				},
				{
					text:'Справка',
				},
				{
					text:'Действие4',
				},
				{
					text:'ИзменитьИзображение',
				},
				{
					text:'Действие5',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель4',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:361px;width:400px;height:25px;',
			items:
			[
				{
					text:'ОК',
				},
				{
					text:'Записать',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Объект',
			style: 'position:absolute;left:142px;top:33px;width:250px;height:19px;',
		},
	]
});
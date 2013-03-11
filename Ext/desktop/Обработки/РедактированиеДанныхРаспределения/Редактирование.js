Ext.define('Обработки.РедактированиеДанныхРаспределения.Редактирование',
	{
	extend: 'Ext.window.Window',
	height: 400,width: 500,
	iconCls: 'bogus',
	title: '',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:500px;height:25px;',
			items:
			[
				{
					text:'Настройка',
				},
				{
					text:'Справка',
				},
				{
					text:'СкопироватьТекущуюНастройку',
				},
				{
					text:'РедактироватьПолномочия',
				},
				{
					text:'РедактироватьСтруктуру',
				},
				{
					text:'Сохранить',
				},
				{
					text:'СохранитьНастройку',
				},
				{
					text:'ВыбратьНастройку',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:375px;width:500px;height:25px;',
			items:
			[
				{
					text:'КнопкаОК',
				},
				{
					text:'Отмена',
				},
			]
		},
	]
});
Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.РегистрСведений_ФайлыСведенийСпецоператоры_ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 741,
	iconCls: 'bogus',
	title: 'Список Кэш файлов Спецоператоров',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:725px;height:259px;',
			height: 259,width: 725,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'УчетнаяЗапись',
				},
				{
					text:'Данные',
				},
				{
					text:'ДатаФайла',
				},
				{
					text:'Размер',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:741px;height:25px;',
			items:
			[
				{
					text:'Очистить',
				},
				{
					text:'Разделитель3',
				},
			]
		},
	]
});
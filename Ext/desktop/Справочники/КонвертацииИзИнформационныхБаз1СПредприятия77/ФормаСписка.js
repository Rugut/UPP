Ext.define('Справочники.КонвертацииИзИнформационныхБаз1СПредприятия77.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 190,width: 700,
	iconCls: 'bogus',
	title: 'Конвертации из информационных баз 1С:Предприятия 7.7',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:684px;height:149px;',
			height: 149,width: 684,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Конфигурация',
				},
				{
					text:'ИдентификаторКонфигурации',
				},
				{
					text:'НомерРелиза',
				},
				{
					text:'КонвертацияПомощник',
				},
				{
					text:'КонвертацияОбработка',
				},
				{
					text:'КонвертацияПравила',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:700px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'ВосставитьФайлы',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ЗаменитьФайлы',
				},
				{
					text:'ЗаписатьНаДиск',
				},
			]
		},
	]
});
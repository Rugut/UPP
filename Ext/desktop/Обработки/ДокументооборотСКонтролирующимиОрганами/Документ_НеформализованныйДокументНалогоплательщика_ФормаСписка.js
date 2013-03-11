Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.Документ_НеформализованныйДокументНалогоплательщика_ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 445,width: 700,
	iconCls: 'bogus',
	title: 'Неформализованные документы налогоплательщиков',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:684px;height:404px;',
			height: 404,width: 684,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Номер',
				},
				{
					text:'Дата',
				},
				{
					text:'Организация',
				},
				{
					text:'ИмяФайла',
				},
				{
					text:'ТипФайла',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:700px;height:25px;',
			items:
			[
				{
					text:'Разделитель5',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Подменю2',
				},
				{
					text:'ЦиклыОбмена',
				},
				{
					text:'Действие11',
				},
			]
		},
	]
});
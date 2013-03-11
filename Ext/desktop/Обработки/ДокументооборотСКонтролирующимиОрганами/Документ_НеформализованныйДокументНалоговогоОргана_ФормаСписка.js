Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.Документ_НеформализованныйДокументНалоговогоОргана_ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 445,width: 700,
	iconCls: 'bogus',
	title: 'Неформализованные документы налоговых органов',
	
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
					text:'НалоговыйОрган',
				},
				{
					text:'Организация',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:700px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ЦиклыОбмена',
				},
				{
					text:'Действие11',
				},
				{
					text:'Подменю3',
				},
				{
					text:'Разделитель5',
				},
			]
		},
	]
});
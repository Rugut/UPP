Ext.define('Справочники.НастройкиОбменаССайтом.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 724,
	iconCls: 'bogus',
	title: 'Справочник Настройки обмена с WEB - сайтом',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:708px;height:259px;',
			height: 259,width: 708,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Код',
				},
				{
					text:'Наименование',
				},
				{
					text:'ЗагрузкаДанных',
				},
				{
					text:'ВыгрузкаДанных',
				},
				{
					text:'АдресДляОбмена',
				},
				{
					text:'Комментарий',
				},
				{
					text:'HTTPОбменАдресСайта',
				},
				{
					text:'КаталогВыгрузки',
				},
				{
					text:'ВыгружатьНаСайт',
				},
				{
					text:'УзелОбменаТоварами',
				},
				{
					text:'УзелОбменаЗаказами',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:724px;height:25px;',
			items:
			[
				{
					text:'Разделитель4',
				},
				{
					text:'ВыполнитьОбмен',
				},
				{
					text:'ВыполнитьОбмен',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'ОткрытьМониторОбменов',
				},
				{
					text:'Подменю',
				},
				{
					text:'ОткрытьМониторОбменов',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'ПомощникНастройкиОбмена',
				},
			]
		},
	]
});
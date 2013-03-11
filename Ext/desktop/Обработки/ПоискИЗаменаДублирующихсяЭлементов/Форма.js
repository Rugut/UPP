Ext.define('Обработки.ПоискИЗаменаДублирующихсяЭлементов.Форма',
	{
	extend: 'Ext.window.Window',
	height: 362,width: 693,
	iconCls: 'bogus',
	title: 'Поиск дублирующихся элементов',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:693px;height:25px;',
			items:
			[
				{
					text:'Настройка',
				},
				{
					text:'Разделитель2',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:677px;height:318px;',
			height: 318,width: 677,
			items:
			[
				{
					title:'Настройка',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:663px;height:261px;',
			height: 261,width: 663,
			columns:
			[
				{
					text:'ИмяНастройки',
				},
				{
					text:'ТипСравнения',
				},
				{
					text:'Представление',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:663px;height:24px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Добавить',
				},
				{
					text:'Поиск',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Удалить',
				},
			]
		},
					]
				},
				{
					title:'Результаты',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:663px;height:257px;',
			height: 257,width: 663,
			columns:
			[
				{
					text:'Ссылка',
				},
				{
					text:'Правильный',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:5px;width:663px;height:24px;',
			items:
			[
				{
					text:'СледующаяГруппа',
				},
				{
					text:'ПредыдущаяГруппа',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Добавить',
				},
				{
					text:'Автозамена',
				},
				{
					text:'ПоискЗависимых',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'ПоискИЗаменаВоВсехГруппах',
				},
				{
					text:'АвтоопределениеПравильных',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ПоискСсылок',
				},
				{
					text:'ВыборПравильного',
				},
				{
					text:'Удалить',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'ВыборГруппы',
				},
			]
		},
					]
				},
				{
					title:'ЗависимыеЭлементы',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:663px;height:24px;',
			items:
			[
				{
					text:'ВыполнитьЗамену',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'УдалитьЭлементы',
				},
				{
					text:'ПоискСсылок',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:663px;height:108px;',
			height: 108,width: 663,
			columns:
			[
				{
					text:'НеПравильный',
				},
				{
					text:'ВключатьВПоиск',
				},
				{
					text:'Правильный',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:153px;width:663px;height:134px;',
			height: 134,width: 663,
			columns:
			[
			]
		},
					]
				},
				{
					title:'НайденныеСсылки',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:663px;height:259px;',
			height: 259,width: 663,
			columns:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:237px;height:24px;',
			items:
			[
				{
					text:'УдалитьЭл��менты',
				},
				{
					text:'ВыполнитьЗамену',
				},
				{
					text:'Разделитель',
				},
			]
		},
					]
				},
			]
		},
	]
});
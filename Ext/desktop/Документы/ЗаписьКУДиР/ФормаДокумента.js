Ext.define('Документы.ЗаписьКУДиР.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 420,width: 736,
	iconCls: 'bogus',
	title: 'Запись книги учета доходов и расходов УСН (ручной учет)',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:90px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:190px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:90px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:736px;height:25px;',
			items:
			[
				{
					text:'Подменю1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'ПроводкиДтКтНУ',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:395px;width:736px;height:25px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:368px;width:634px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:86px;width:720px;height:253px;',
			height: 253,width: 720,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:698px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:698px;height:197px;',
			height: 197,width: 698,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ДатаНомер',
				},
				{
					text:'Содержание',
				},
				{
					text:'Графа4',
				},
				{
					text:'Графа5',
				},
				{
					text:'Графа6',
				},
				{
					text:'Графа7',
				},
				{
					text:'НДС',
				},
				{
					text:'ДоходыЕНВД',
				},
				{
					text:'РасходыЕНВД',
				},
			]
		},
					]
				},
				{
					title:'Страница2',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:706px;height:197px;',
			height: 197,width: 706,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ОсновноеСредство',
				},
				{
					text:'ДатаОплаты',
				},
				{
					text:'Графа5_ПервоначальнаяСтоимость',
				},
				{
					text:'Графа4_ГосударственнаяРегистрация',
				},
				{
					text:'Графа6_ОстаточнаяСтоимость',
				},
				{
					text:'Графа8_КолКварталовВОтчетномПериоде',
				},
				{
					text:'Графа9_КолКварталовВНалПериоде',
				},
				{
					text:'Графа10_ДоляРасходовЗаНалПериод',
				},
				{
					text:'Графа11_ДоляРасходовЗаКвартал',
				},
				{
					text:'Графа12_СуммаРасходовЗаОтчетнПериод',
				},
				{
					text:'Графа13_СуммаРасходовЗаКвартал',
				},
				{
					text:'Графа14_РасходыПрошлыхПериодов',
				},
				{
					text:'Графа15_ОстатокРасходов',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:706px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Страница3',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:706px;height:197px;',
			height: 197,width: 706,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'НематериальныйАктив',
				},
				{
					text:'ДатаОплаты',
				},
				{
					text:'Графа5_ПервоначальнаяСтоимость',
				},
				{
					text:'Графа6_ОстаточнаяСтоимость',
				},
				{
					text:'Графа8_КолКварталовВОтчетномПериоде',
				},
				{
					text:'Графа9_КолКварталовВНалПериоде',
				},
				{
					text:'Графа10_ДоляРасходовЗаНалПериод',
				},
				{
					text:'Графа11_ДоляРасходовЗаКвартал',
				},
				{
					text:'Графа12_СуммаРасходовЗаОтчетнПериод',
				},
				{
					text:'Графа13_СуммаРасходовЗаКвартал',
				},
				{
					text:'Графа14_РасходыПрошлыхПериодов',
				},
				{
					text:'Графа15_ОстатокРасходов',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:706px;height:24px;',
			items:
			[
			]
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:94px;top:344px;width:634px;height:19px;',
		},
	]
});
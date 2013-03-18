Ext.define('Документы.ПередачаОборудованияВМонтаж.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:660px;height:413px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Передача оборудования в монтаж',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:94px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'от:',
			style: 'position:absolute;left:176px;top:33px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:194px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:57px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:94px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:148px;width:644px;height:24px;',
			items:
			[
				'-',
				{
					text:'Подбор',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:172px;width:644px;height:160px;',
			height: 160,width: 644,
			columns:
			[
				{
					text:'№',
					width:'20',
				},
				{
					text:'Номенклатура',
					width:'175',
				},
				{
					text:'Характеристика',
					width:'100',
				},
				{
					text:'Серия',
					width:'101',
				},
				{
					text:'Ед. мест',
					width:'50',
				},
				{
					text:'К. мест',
					width:'45',
				},
				{
					text:'Мест',
					width:'100',
				},
				{
					text:'Количество',
					width:'100',
				},
				{
					text:'Ед.',
					width:'50',
				},
				{
					text:'К.',
					width:'59',
				},
				{
					text:'Счет учета (БУ)',
					width:'120',
				},
				{
					text:'Счет учета (НУ)',
					width:'111',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:660px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'',
				},
				{
					text:'',
				},
				'-',
					]
				},
				'-',
				{
					text:'',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Дт/кт',
				},
				{
					text:'Дт/кт',
				},
				'-',
				{
					text:'Показать/скрыть счета учета',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:388px;width:660px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Печать',
				},
				'-',
				{
					text:'OK',
				},
				'-',
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Объект строительства:',
			style: 'position:absolute;left:8px;top:78px;width:84px;height:27px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОбъектВнеоборотныхАктивов',
			style: 'position:absolute;left:94px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Статья затрат:',
			style: 'position:absolute;left:8px;top:105px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяЗатрат',
			style: 'position:absolute;left:94px;top:105px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Склад:',
			style: 'position:absolute;left:334px;top:57px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Склад',
			style: 'position:absolute;left:416px;top:57px;width:236px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Отражать:',
			style: 'position:absolute;left:334px;top:33px;width:79px;height:19px;text-align:left;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'упр. учете',
			style: 'position:absolute;left:416px;top:33px;width:72px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'бух. учете',
			style: 'position:absolute;left:494px;top:33px;width:72px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'налог. учете',
			style: 'position:absolute;left:572px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетУчетаБУОбъектаСтроительства',
			text: 'Счет БУ:',
			style: 'position:absolute;left:334px;top:81px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаБУОбъектаСтроительства',
			style: 'position:absolute;left:416px;top:81px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетУчетаНУОбъектаСтроительства',
			text: 'Счет НУ:',
			style: 'position:absolute;left:334px;top:105px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаНУОбъектаСтроительства',
			style: 'position:absolute;left:416px;top:105px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:337px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:94px;top:337px;width:558px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментари��:',
			style: 'position:absolute;left:8px;top:361px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:361px;width:558px;height:19px;',
		},
	]
});
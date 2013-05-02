Ext.define('Справочники.СтатьиАналитическогоБаланса.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:454px;height:336px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Статьи аналитического баланса',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:33px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:33px;width:180px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКодДляОтчета',
			text: 'Код для отчета:',
			style: 'position:absolute;left:275px;top:33px;width:88px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодДляОтчета',
			style: 'position:absolute;left:365px;top:33px;width:81px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:143px;width:438px;height:160px;',
			height: 160,width: 438,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Счет',
					width:'80',
					dataIndex:'Счет',
					flex:1,
				},
				{
					text:'Наименование счета',
					width:'120',
					dataIndex:'НаименованиеСчета',
					flex:1,
				},
				{
					text:'Вид остатка',
					width:'120',
					dataIndex:'ВидОстатка',
					flex:1,
				},
				{
					text:'Знак',
					width:'32',
					dataIndex:'Знак',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СтатьиАналитическогоБаланса/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Счет',
					},
					{
						name:'НаименованиеСчета',
					},
					{
						name:'ВидОстатка',
					},
					{
						name:'Знак',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:311px;width:454px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
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
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:119px;width:438px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'&Изменить',
				},
				{
					text:'&Удалить',
				},
				{
					text:'Закончить редактирование',
				},
				{
					text:'&Переместить вверх',
				},
				{
					text:'&Переместить вниз',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:454px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				{
					text:'Найти в списке',
				},
				'-',
				{
					text:'Перечитать',
				},
				{
					text:'Записать',
				},
				{
					text:'Записать и закрыть',
				},
				'-',
				{
					text:'Закрыть',
				},
					]
				},
				'-',
				{
					text:'Найти в списке',
				},
				'-',
				{
					text:'Перечитать',
				},
				{
					xtype: 'splitbutton',
					text:'Перейти',
					menu: [
				{
					text:'',
				},
					]
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			name: 'НаименованиеДляОтчета',
			style: 'position:absolute;left:94px;top:57px;width:352px;height:38px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименованиеДляОтчета',
			text: 'Наименование для отчета:',
			style: 'position:absolute;left:8px;top:57px;width:84px;height:38px;text-align:left;',
		},
	]
});
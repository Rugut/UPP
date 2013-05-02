Ext.define('Документы.ОтчетОСоставеСмены.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:750px;height:367px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Отчет о составе смены',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:750px;height:25px;',
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
					text:'Скопировать',
				},
				{
					text:'Записать',
				},
				{
					text:'Записать и закрыть',
				},
				'-',
				{
					text:'Провести',
				},
				{
					text:'Отмена проведения',
				},
				'-',
				{
					xtype: 'splitbutton',
					text:'Перейти',
					menu: [
					]
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
					text:'Скопировать',
				},
				{
					xtype: 'splitbutton',
					text:'На основании',
					menu: [
				{
					text:'(Ввести на основании)',
				},
					]
				},
				'-',
				{
					xtype: 'splitbutton',
					text:'Перейти',
					menu: [
				{
					text:'Структура подчиненности документа',
				},
				'-',
				{
					text:'',
				},
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
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:342px;width:750px;height:25px;',
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
					text:'ОК',
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
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:130px;top:33px;width:16px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:148px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделение',
			text: 'Подразделение:',
			style: 'position:absolute;left:434px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Подразделение',
			style: 'position:absolute;left:522px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСмена',
			text: 'Смена:',
			style: 'position:absolute;left:8px;top:57px;width:40px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Смена',
			style: 'position:absolute;left:48px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:522px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПредыдущаяСмена',
			text: 'Предыдущая смена:',
			style: 'position:absolute;left:8px;top:82px;width:108px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ПредыдущаяСмена',
			text: 'Первая смена 01.01.0001',
			style: 'position:absolute;left:116px;top:82px;width:626px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:125px;width:734px;height:25px;',
			items:
			[
				'-',
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:150px;width:734px;height:157px;',
			height: 157,width: 734,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Сотрудник',
					width:'120',
					dataIndex:'Сотрудник',
					flex:1,
				},
				{
					text:'Явка',
					width:'40',
					dataIndex:'Явка',
					flex:1,
				},
				{
					text:'Время явки',
					width:'60',
					dataIndex:'ВремяЯвки',
					flex:1,
				},
				{
					text:'Отработанное время',
					width:'80',
					dataIndex:'ОтработанноеВремя',
					flex:1,
				},
				{
					text:'Замещающий сотрудник',
					width:'120',
					dataIndex:'ЗамещающийСотрудник',
					flex:1,
				},
				{
					text:'Примечание',
					width:'120',
					dataIndex:'Примечание',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОтчетОСоставеСмены/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Сотрудник',
					},
					{
						name:'Явка',
					},
					{
						name:'ВремяЯвки',
					},
					{
						name:'ОтработанноеВремя',
					},
					{
						name:'ЗамещающийСотрудник',
					},
					{
						name:'Примечание',
					},
				]
			},
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:315px;width:76px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:84px;top:315px;width:658px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:40px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:48px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:434px;top:57px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ПериодСмены',
			text: '01.01.0001 (00:00 - 23:59)',
			style: 'position:absolute;left:273px;top:57px;width:156px;height:19px;',
		},
	]
});
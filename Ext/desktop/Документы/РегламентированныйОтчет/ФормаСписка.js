Ext.define('Документы.РегламентированныйОтчет.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:688px;height:425px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Регламентированные отчеты',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:116px;width:672px;height:277px;',
			height: 277,width: 672,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Отчет',
					width:'222',
				},
				{
					text:'Период',
					width:'98',
				},
				{
					text:'Организация',
					width:'120',
				},
				{
					text:'Дата начала',
					width:'88',
				},
				{
					text:'Дата окончания',
					width:'88',
				},
				{
					text:'ИФНС',
					width:'56',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:688px;height:25px;',
			items:
			[
				{
					text:'Новый',
				},
				{
					text:'&Скопировать',
				},
				{
					text:'&Изменить',
				},
				{
					text:'Установить пометку удаления',
				},
				'-',
				{
					text:'Обновить',
				},
				'-',
				{
					text:'Журнал выгрузки',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:107px;top:36px;width:573px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПолеВвода1',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:397px;width:97px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВвода1',
			style: 'position:absolute;left:110px;top:398px;width:570px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Организация:',
			style: 'position:absolute;left:17px;top:36px;width:87px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Форма:',
			style: 'position:absolute;left:17px;top:61px;width:86px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'ИФНС:',
			style: 'position:absolute;left:372px;top:61px;width:55px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Период:',
			style: 'position:absolute;left:17px;top:86px;width:87px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:238px;top:80px;width:257px;height:31px;',
			height: 31,width: 257,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Произвольный период',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПериодСоставленияОтчета',
			text: '',
			style: 'position:absolute;left:33px;top:6px;width:190px;height:19px;text-align:center;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода2',
			text: '...',
			style: 'position:absolute;left:231px;top:6px;width:20px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачалаПериодаОтчета',
			style: 'position:absolute;left:21px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПолеВвода6',
			text: 'по',
			style: 'position:absolute;left:111px;top:6px;width:21px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКонцаПериодаОтчета',
			style: 'position:absolute;left:134px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПолеВвода7',
			text: 'с',
			style: 'position:absolute;left:6px;top:6px;width:15px;height:19px;text-align:left;',
		},
					]
				},
				{
					title:'Стандартный период',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаПредыдущийПериод2',
			text: '',
			style: 'position:absolute;left:13px;top:6px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСледующийПериод2',
			text: '',
			style: 'position:absolute;left:229px;top:6px;width:20px;height:19px;',
		},
					]
				},
			]
		},
	]
});
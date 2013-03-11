Ext.define('Отчеты.МониторЭффективности.НастройкаПоказателя',
	{
	extend: 'Ext.window.Window',
	height: 296,width: 404,
	iconCls: 'bogus',
	title: 'Настройка показателя',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:271px;width:404px;height:25px;',
			items:
			[
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'ДействиеСправка',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ОсновныеДействияФормыОК',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОсновнаяРасшифровка',
			style: 'position:absolute;left:94px;top:33px;width:302px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:84px;width:388px;height:179px;',
			height: 179,width: 388,
			items:
			[
				{
					title:'Параметры',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:6px;width:374px;height:147px;',
			height: 147,width: 374,
			columns:
			[
				{
					text:'ПараметрПредставление',
				},
				{
					text:'Значение',
				},
			]
		},
					]
				},
				{
					title:'Индикаторы',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТрендНижняяГраница',
			style: 'position:absolute;left:63px;top:27px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТрендВерхняяГраница',
			style: 'position:absolute;left:243px;top:27px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИндикаторТрендНижняяГраница',
			style: 'position:absolute;left:6px;top:27px;width:36px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИндикаторТрендСредняяГраница',
			style: 'position:absolute;left:174px;top:27px;width:36px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИндикаторТрендВерхняяГраница',
			style: 'position:absolute;left:344px;top:27px;width:36px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СостояниеНижняяГраница',
			style: 'position:absolute;left:63px;top:81px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СостояниеВерхняяГраница',
			style: 'position:absolute;left:243px;top:81px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИндикаторСостояниеНижняяГраница',
			style: 'position:absolute;left:6px;top:81px;width:36px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИндикаторСостояниеСредняяГраница',
			style: 'position:absolute;left:174px;top:81px;width:36px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИндикаторСостояниеВерхняяГраница',
			style: 'position:absolute;left:344px;top:81px;width:36px;height:19px;',
		},
					]
				},
				{
					title:'Расшифровки',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:374px;height:123px;',
			height: 123,width: 374,
			columns:
			[
				{
					text:'Представление',
				},
				{
					text:'ПредставлениеРасшифровки',
				},
				{
					text:'НаименованиеНастройкиОтчета',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:374px;height:24px;',
			items:
			[
				{
					text:'Действие5',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие1',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПредставлениеПоказателя',
			style: 'position:absolute;left:94px;top:9px;width:302px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НастройкаОсновнойРасшифровки',
			style: 'position:absolute;left:94px;top:57px;width:302px;height:19px;',
		},
	]
});
Ext.define('Справочники.ПрофилиПолномочийПользователей.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:631px;height:401px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Профиль полномочий пользователей',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:631px;height:25px;',
			items:
			[
				{
					text:'Групповая обработка пользователей',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:376px;width:631px;height:25px;',
			items:
			[
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
			name: 'НадписьОсновнойИнтерфейс',
			text: 'Основной интерфейс:',
			style: 'position:absolute;left:290px;top:33px;width:114px;height:19px;',
		},
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
			style: 'position:absolute;left:93px;top:33px;width:186px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:132px;width:271px;height:236px;',
			height: 236,width: 271,
			columns:
			[
				{
					text:'Имя роли',
					width:'100',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:290px;top:132px;width:333px;height:236px;',
			height: 236,width: 333,
			columns:
			[
				{
					text:'Право',
					width:'270',
				},
				{
					text:'Значение',
					width:'56',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:290px;top:108px;width:333px;height:24px;',
			items:
			[
				{
					text:'Установить флажки',
				},
				{
					text:'Снять флажки',
				},
				'-',
				{
					text:'Копировать',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:108px;width:271px;height:24px;',
			items:
			[
				{
					text:'Изменить',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьРолиПрофиля',
			text: 'Роли профиля',
			style: 'position:absolute;left:8px;top:87px;width:271px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДополнительныеПрава',
			text: 'Дополнительные права',
			style: 'position:absolute;left:290px;top:87px;width:333px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРодитель',
			text: 'Группа:',
			style: 'position:absolute;left:8px;top:57px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:93px;top:57px;width:186px;height:19px;',
		},
	]
});
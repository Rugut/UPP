Ext.define('Справочники.ГруппыПользователей.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:500px;height:417px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Группа пользователей',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Код:',
			style: 'position:absolute;left:386px;top:33px;width:25px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:412px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:33px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:92px;top:33px;width:284px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:500px;height:25px;',
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
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:392px;width:500px;height:25px;',
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
			xtype: 'label',
			name: 'НадписьРодитель',
			text: 'Родитель:',
			style: 'position:absolute;left:8px;top:57px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:92px;top:57px;width:400px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:266px;top:113px;width:226px;height:24px;',
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
				'-',
				{
					text:'Подбор',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:266px;top:138px;width:226px;height:214px;',
			height: 214,width: 226,
			columns:
			[
				{
					text:'N',
					width:'38',
				},
				{
					text:'Пользователь группы',
					width:'148',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:138px;width:249px;height:214px;',
			height: 214,width: 249,
			columns:
			[
				{
					text:'Вид объекта доступа',
					width:'164',
				},
				{
					text:'Чтение',
					width:'48',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:113px;width:249px;height:24px;',
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
					text:'Настройка доступа',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьRLS',
			text: 'Ограничение доступа',
			style: 'position:absolute;left:8px;top:90px;width:249px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьСоставГруппы',
			text: 'Состав группы',
			style: 'position:absolute;left:266px;top:90px;width:226px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Перед включением пользователей в группу проверьте настройки доступа',
			style: 'position:absolute;left:266px;top:355px;width:226px;height:29px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПредупреждениеОграниченияДоступа',
			text: '',
			style: 'position:absolute;left:8px;top:355px;width:249px;height:29px;',
		},
	]
});
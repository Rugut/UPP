Ext.define('Обработки.ОбщиеОбъектыРегламентированнойОтчетности.ФормаВыбораОрганизаций',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:560px;height:395px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Выберите организации',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:370px;width:560px;height:25px;',
			items:
			[
				{
					text:'ОК',
				},
				{
					text:'Действие',
				},
				'-',
				{
					text:'Закрыть',
				},
				'-',
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:35px;width:544px;height:327px;',
			height: 327,width: 544,
			columns:
			[
				{
					text:'',
					width:'22',
				},
				{
					text:'',
					width:'24',
				},
				{
					text:'Код',
					width:'63',
				},
				{
					text:'Наименование',
					width:'350',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:10px;width:544px;height:24px;',
			items:
			[
				{
					text:'Действие',
				},
				'-',
				{
					text:'Действие3',
				},
				'-',
				{
					text:'Установить флажки',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				'-',
				'-',
				{
					text:'',
				},
				{
					text:'Действие4',
				},
				'-',
				{
					text:'Действие5',
				},
				{
					text:'Действие1',
				},
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'Снять флажки',
				},
				{
					text:'Действие1',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'Обособленные подразделения',
				},
				{
					text:'',
				},
				{
					text:'Действие3',
				},
				'-',
				{
					text:'Действие4',
				},
				'-',
				'-',
				{
					text:'Действие6',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Действие2',
				},
			]
		},
	]
});
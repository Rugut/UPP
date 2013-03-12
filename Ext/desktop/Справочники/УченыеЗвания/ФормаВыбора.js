Ext.define('Справочники.УченыеЗвания.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:449px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Справочник Ученые звания',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:433px;height:259px;',
			height: 259,width: 433,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Код',
					width:'63',
				},
				{
					text:'Наименование',
					width:'175',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:449px;height:25px;',
			items:
			[
				{
					text:'Действие4',
				},
				{
					text:'Действие3',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Подбор из ОКИН',
				},
				{
					text:'Действия формы выбрать',
				},
				'-',
				'-',
				{
					text:'Действие7',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие9',
				},
				'-',
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
				'-',
				{
					text:'Действие6',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Действие10',
				},
				{
					text:'Действие1',
				},
				'-',
				'-',
				{
					text:'Действие',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие5',
				},
				{
					text:'',
				},
				'-',
			]
		},
	]
});